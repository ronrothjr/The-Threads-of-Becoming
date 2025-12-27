import { Injectable, Logger, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { TrainingModule, TrainingModuleDocument } from './schemas/training-module.schema';
import { SpeechifyService } from '../services/speechify.service';
import { S3Service } from '../services/s3.service';

@Injectable()
export class TrainingAdminService {
  private readonly logger = new Logger(TrainingAdminService.name);

  constructor(
    @InjectModel(TrainingModule.name)
    private trainingModuleModel: Model<TrainingModuleDocument>,
    private speechifyService: SpeechifyService,
    private s3Service: S3Service,
  ) {}

  /**
   * Get all training modules (admin view)
   */
  async getAllModules(): Promise<TrainingModuleDocument[]> {
    return this.trainingModuleModel.find().sort({ thread: 1, tier: 1 }).exec();
  }

  /**
   * Get single module by ID
   */
  async getModule(moduleId: string): Promise<TrainingModuleDocument> {
    const module = await this.trainingModuleModel.findOne({ moduleId }).exec();
    if (!module) {
      throw new NotFoundException(`Module ${moduleId} not found`);
    }
    return module;
  }

  /**
   * Create or update a training module
   */
  async saveModule(moduleData: Partial<TrainingModule>): Promise<TrainingModuleDocument> {
    try {
      const { moduleId } = moduleData;

      if (!moduleId) {
        throw new Error('moduleId is required');
      }

      this.logger.log(`Saving module: ${moduleId}`);

      const existing = await this.trainingModuleModel.findOne({ moduleId }).exec();

      if (existing) {
        // Update existing
        Object.assign(existing, moduleData);
        const saved = await existing.save();
        this.logger.log(`Successfully updated module: ${moduleId}`);
        return saved;
      } else {
        // Create new
        const newModule = new this.trainingModuleModel(moduleData);
        const saved = await newModule.save();
        this.logger.log(`Successfully created module: ${moduleId}`);
        return saved;
      }
    } catch (error) {
      this.logger.error(`Error saving module: ${error.message}`, error.stack);
      throw error;
    }
  }

  /**
   * Update script text for slide, meditation, exercise, or practice
   */
  async updateScript(
    moduleId: string,
    contentType: 'slides' | 'meditations' | 'exercises' | 'practices',
    index: number,
    text: string,
  ): Promise<void> {
    const module = await this.getModule(moduleId);

    if (contentType === 'slides') {
      const slide = module.slides.find(s => s.slideNumber === index);
      if (!slide) throw new NotFoundException(`Slide ${index} not found`);
      slide.narration.text = text;
    } else if (contentType === 'meditations') {
      const meditation = module.meditations[index];
      if (!meditation) throw new NotFoundException(`Meditation ${index} not found`);
      meditation.audio.text = text;
    } else if (contentType === 'exercises') {
      const exercise = module.exercises[index];
      if (!exercise) throw new NotFoundException(`Exercise ${index} not found`);
      if (exercise.instructionAudio) exercise.instructionAudio.text = text;
    } else if (contentType === 'practices') {
      const practice = module.practiceAssignments[index];
      if (!practice) throw new NotFoundException(`Practice ${index} not found`);
      if (practice.audio) practice.audio.text = text;
    }

    await module.save();
    this.logger.log(`Updated ${contentType} script at index ${index} in module ${moduleId}`);
  }

  /**
   * Generate audio for a specific slide narration
   */
  async generateSlideAudio(
    moduleId: string,
    slideNumber: number,
    voiceId?: string,
    speed?: number,
    customText?: string,
  ): Promise<{ audioUrl: string; duration: number }> {
    this.logger.log(`[AUDIO-GEN] Starting slide audio generation for ${moduleId} slide ${slideNumber}`);

    const module = await this.getModule(moduleId);
    const slide = module.slides.find(s => s.slideNumber === slideNumber);

    if (!slide || !slide.narration) {
      this.logger.error(`[AUDIO-GEN] Slide ${slideNumber} narration not found in module ${moduleId}`);
      throw new NotFoundException(`Slide ${slideNumber} narration not found`);
    }

    const textToGenerate = customText || slide.narration.text;
    const voiceToUse = voiceId || slide.narration.voiceId || 'cliff';
    const speedToUse = speed || slide.narration.speed || 0.90;

    this.logger.log(`[AUDIO-GEN] Text length: ${textToGenerate.length} characters`);
    this.logger.log(`[AUDIO-GEN] Voice: ${voiceToUse}, Speed: ${speedToUse}`);

    this.logger.log(`[AUDIO-GEN] Calling Speechify API...`);
    const result = await this.speechifyService.generateNarration(
      textToGenerate,
      {
        voice_id: voiceToUse,
        speed: speedToUse,
      }
    );

    this.logger.log(`[AUDIO-GEN] Speechify response received - Duration: ${result.duration_seconds}s, Characters used: ${result.characters_used}`);
    this.logger.log(`[AUDIO-GEN] Audio data type: ${typeof result.audio_data}`);

    let finalAudioUrl: string;

    // Speechify returns audio data directly, not a URL - upload to S3
    if (this.s3Service.isConfigured()) {
      this.logger.log(`[AUDIO-GEN] S3 is configured, uploading audio data to S3...`);

      try {
        // Delete old audio file if it exists
        if (slide.narration.audioUrl) {
          this.logger.log(`[AUDIO-GEN] Deleting old audio file...`);
          await this.s3Service.deleteByUrl(slide.narration.audioUrl);
        }

        const s3Key = this.s3Service.generateAssetKey(
          moduleId,
          'audio',
          `slide-${slideNumber}-narration.mp3`
        );

        this.logger.log(`[AUDIO-GEN] Generated S3 key: ${s3Key}`);
        this.logger.log(`[AUDIO-GEN] Uploading audio data to S3...`);

        // Convert audio data to Buffer if needed
        if (!result.audio_data) {
          throw new Error('No audio data returned from Speechify');
        }

        let audioBuffer: Buffer;
        if (Buffer.isBuffer(result.audio_data)) {
          audioBuffer = result.audio_data;
        } else {
          throw new Error('Unexpected audio data format from Speechify');
        }

        const s3Result = await this.s3Service.uploadFile(
          audioBuffer,
          s3Key,
          'audio/mpeg'
        );

        finalAudioUrl = s3Result.url;
        this.logger.log(`[AUDIO-GEN] ✅ Successfully uploaded to S3`);
        this.logger.log(`[AUDIO-GEN] CloudFront URL: ${finalAudioUrl}`);
      } catch (error) {
        this.logger.error(`[AUDIO-GEN] ❌ S3 upload failed: ${error.message}`, error.stack);
        throw new Error(`Failed to upload audio to S3: ${error.message}`);
      }
    } else {
      this.logger.error(`[AUDIO-GEN] S3 is not configured - cannot store audio`);
      throw new Error('S3 is not configured - audio storage is required');
    }

    // Update slide with generated audio
    this.logger.log(`[AUDIO-GEN] Updating module in database...`);
    slide.narration.audioUrl = finalAudioUrl;
    slide.narration.duration = result.duration_seconds;
    slide.narration.generatedAt = new Date();
    slide.narration.charactersUsed = result.characters_used;
    slide.narration.voiceId = voiceToUse;
    slide.narration.speed = speedToUse;

    await module.save();
    this.logger.log(`[AUDIO-GEN] ✅ Module saved successfully`);

    this.logger.log(`[AUDIO-GEN] 🎉 Audio generation complete for ${moduleId} slide ${slideNumber}`);
    return {
      audioUrl: finalAudioUrl,
      duration: result.duration_seconds,
    };
  }

  /**
   * Get available Speechify voices (premium AI-enhanced + cloned only)
   */
  async getAvailableVoices() {
    const allVoices = await this.speechifyService.getVoices();

    // Filter for premium AI-enhanced voices and personal cloned voices
    // Exclude basic/standard voices
    const premiumVoices = allVoices.filter(voice => {
      // Include all personal (cloned) voices
      if (voice.type === 'personal') return true;

      // Include premium AI-enhanced shared voices
      // These typically have is_premium: true or specific model indicators
      if (voice.is_premium) return true;

      // Include voices with premium models (simba, etc.)
      if (voice.model && (voice.model.includes('simba') || voice.model.includes('premium'))) {
        return true;
      }

      // Default fallback: include well-known premium voices
      const premiumVoiceIds = ['george', 'henry', 'cliff', 'nova', 'stella', 'mia', 'snoop', 'mrbeast', 'gwyneth'];
      return premiumVoiceIds.includes(voice.voice_id);
    });

    this.logger.log(`Returning ${premiumVoices.length} premium/cloned voices (filtered from ${allVoices.length} total)`);
    return premiumVoices;
  }

  /**
   * Generate audio for meditation
   */
  async generateMeditationAudio(
    moduleId: string,
    meditationIndex: number,
    voiceId?: string,
    speed?: number,
    emotion?: string,
  ): Promise<{ audioUrl: string; duration: number }> {
    this.logger.log(`[AUDIO-GEN] Starting meditation audio generation for ${moduleId} meditation ${meditationIndex}`);

    const module = await this.getModule(moduleId);
    const meditation = module.meditations[meditationIndex];

    if (!meditation || !meditation.audio) {
      this.logger.error(`[AUDIO-GEN] Meditation ${meditationIndex} not found in module ${moduleId}`);
      throw new NotFoundException(`Meditation ${meditationIndex} not found`);
    }

    const voiceToUse = voiceId || meditation.audio.voiceId || 'george';
    const speedToUse = speed || meditation.audio.speed || 0.80;
    const emotionToUse = emotion || 'calm';

    this.logger.log(`[AUDIO-GEN] Text length: ${meditation.audio.text.length} characters`);
    this.logger.log(`[AUDIO-GEN] Voice: ${voiceToUse}, Speed: ${speedToUse}, Emotion: ${emotionToUse}`);

    this.logger.log(`[AUDIO-GEN] Calling Speechify API...`);
    const result = await this.speechifyService.generateMeditation(
      meditation.audio.text,
      {
        voice_id: voiceToUse,
        speed: speedToUse,
      },
      emotionToUse
    );

    this.logger.log(`[AUDIO-GEN] Speechify response received - Duration: ${result.duration_seconds}s, Characters used: ${result.characters_used}`);
    this.logger.log(`[AUDIO-GEN] Audio data type: ${typeof result.audio_data}`);

    let finalAudioUrl: string;

    // Speechify returns audio data directly, not a URL - upload to S3
    if (this.s3Service.isConfigured()) {
      this.logger.log(`[AUDIO-GEN] S3 is configured, uploading audio data to S3...`);

      try {
        // Delete old audio file if it exists
        if (meditation.audio.audioUrl) {
          this.logger.log(`[AUDIO-GEN] Deleting old audio file...`);
          await this.s3Service.deleteByUrl(meditation.audio.audioUrl);
        }

        const s3Key = this.s3Service.generateAssetKey(
          moduleId,
          'audio',
          `meditation-${meditationIndex}.mp3`
        );

        this.logger.log(`[AUDIO-GEN] Generated S3 key: ${s3Key}`);
        this.logger.log(`[AUDIO-GEN] Uploading audio data to S3...`);

        // Convert audio data to Buffer if needed
        if (!result.audio_data) {
          throw new Error('No audio data returned from Speechify');
        }

        let audioBuffer: Buffer;
        if (Buffer.isBuffer(result.audio_data)) {
          audioBuffer = result.audio_data;
        } else {
          throw new Error('Unexpected audio data format from Speechify');
        }

        const s3Result = await this.s3Service.uploadFile(
          audioBuffer,
          s3Key,
          'audio/mpeg'
        );

        finalAudioUrl = s3Result.url;
        this.logger.log(`[AUDIO-GEN] ✅ Successfully uploaded to S3`);
        this.logger.log(`[AUDIO-GEN] CloudFront URL: ${finalAudioUrl}`);
      } catch (error) {
        this.logger.error(`[AUDIO-GEN] ❌ S3 upload failed: ${error.message}`, error.stack);
        throw new Error(`Failed to upload audio to S3: ${error.message}`);
      }
    } else {
      this.logger.error(`[AUDIO-GEN] S3 is not configured - cannot store audio`);
      throw new Error('S3 is not configured - audio storage is required');
    }

    // Update meditation with generated audio
    this.logger.log(`[AUDIO-GEN] Updating module in database...`);
    meditation.audio.audioUrl = finalAudioUrl;
    meditation.audio.duration = result.duration_seconds;
    meditation.audio.generatedAt = new Date();
    meditation.audio.charactersUsed = result.characters_used;
    meditation.audio.voiceId = voiceToUse;
    meditation.audio.speed = speedToUse;

    await module.save();
    this.logger.log(`[AUDIO-GEN] ✅ Module saved successfully`);

    this.logger.log(`[AUDIO-GEN] 🎉 Audio generation complete for ${moduleId} meditation ${meditationIndex}`);
    return {
      audioUrl: finalAudioUrl,
      duration: result.duration_seconds,
    };
  }

  /**
   * Generate audio for exercise instructions
   */
  async generateExerciseAudio(
    moduleId: string,
    exerciseIndex: number,
    voiceId?: string,
    speed?: number,
  ): Promise<{ audioUrl: string; duration: number }> {
    this.logger.log(`[AUDIO-GEN] Starting exercise audio generation for ${moduleId} exercise ${exerciseIndex}`);

    const module = await this.getModule(moduleId);
    const exercise = module.exercises[exerciseIndex];

    if (!exercise) {
      this.logger.error(`[AUDIO-GEN] Exercise ${exerciseIndex} not found in module ${moduleId}`);
      throw new NotFoundException(`Exercise ${exerciseIndex} not found`);
    }

    // Initialize instructionAudio if it doesn't exist
    if (!exercise.instructionAudio) {
      this.logger.log(`[AUDIO-GEN] Creating instructionAudio structure from instructions field`);
      exercise.instructionAudio = {
        text: exercise.instructions || '',
        voiceId: 'mia',
        speed: 0.95,
      };
    }

    const voiceToUse = voiceId || exercise.instructionAudio.voiceId || 'mia';
    const speedToUse = speed || exercise.instructionAudio.speed || 0.95;

    this.logger.log(`[AUDIO-GEN] Text length: ${exercise.instructionAudio.text.length} characters`);
    this.logger.log(`[AUDIO-GEN] Voice: ${voiceToUse}, Speed: ${speedToUse}`);

    this.logger.log(`[AUDIO-GEN] Calling Speechify API...`);
    const result = await this.speechifyService.generateExerciseInstructions(
      exercise.instructionAudio.text,
      {
        voice_id: voiceToUse,
        speed: speedToUse,
      }
    );

    this.logger.log(`[AUDIO-GEN] Speechify response received - Duration: ${result.duration_seconds}s, Characters used: ${result.characters_used}`);
    this.logger.log(`[AUDIO-GEN] Audio data type: ${typeof result.audio_data}`);

    let finalAudioUrl: string;

    // Speechify returns audio data directly, not a URL - upload to S3
    if (this.s3Service.isConfigured()) {
      this.logger.log(`[AUDIO-GEN] S3 is configured, uploading audio data to S3...`);

      try {
        // Delete old audio file if it exists
        if (exercise.instructionAudio.audioUrl) {
          this.logger.log(`[AUDIO-GEN] Deleting old audio file...`);
          await this.s3Service.deleteByUrl(exercise.instructionAudio.audioUrl);
        }

        const s3Key = this.s3Service.generateAssetKey(
          moduleId,
          'audio',
          `exercise-${exerciseIndex}.mp3`
        );

        this.logger.log(`[AUDIO-GEN] Generated S3 key: ${s3Key}`);
        this.logger.log(`[AUDIO-GEN] Uploading audio data to S3...`);

        // Convert audio data to Buffer if needed
        if (!result.audio_data) {
          throw new Error('No audio data returned from Speechify');
        }

        let audioBuffer: Buffer;
        if (Buffer.isBuffer(result.audio_data)) {
          audioBuffer = result.audio_data;
        } else {
          throw new Error('Unexpected audio data format from Speechify');
        }

        const s3Result = await this.s3Service.uploadFile(
          audioBuffer,
          s3Key,
          'audio/mpeg'
        );

        finalAudioUrl = s3Result.url;
        this.logger.log(`[AUDIO-GEN] ✅ Successfully uploaded to S3`);
        this.logger.log(`[AUDIO-GEN] CloudFront URL: ${finalAudioUrl}`);
      } catch (error) {
        this.logger.error(`[AUDIO-GEN] ❌ S3 upload failed: ${error.message}`, error.stack);
        throw new Error(`Failed to upload audio to S3: ${error.message}`);
      }
    } else {
      this.logger.error(`[AUDIO-GEN] S3 is not configured - cannot store audio`);
      throw new Error('S3 is not configured - audio storage is required');
    }

    // Update exercise with generated audio
    this.logger.log(`[AUDIO-GEN] Updating module in database...`);
    exercise.instructionAudio.audioUrl = finalAudioUrl;
    exercise.instructionAudio.duration = result.duration_seconds;
    exercise.instructionAudio.generatedAt = new Date();
    exercise.instructionAudio.charactersUsed = result.characters_used;
    exercise.instructionAudio.voiceId = voiceToUse;
    exercise.instructionAudio.speed = speedToUse;

    await module.save();
    this.logger.log(`[AUDIO-GEN] ✅ Module saved successfully`);

    this.logger.log(`[AUDIO-GEN] 🎉 Audio generation complete for ${moduleId} exercise ${exerciseIndex}`);
    return {
      audioUrl: finalAudioUrl,
      duration: result.duration_seconds,
    };
  }

  /**
   * Generate audio for practice assignment
   */
  async generatePracticeAudio(
    moduleId: string,
    practiceIndex: number,
    voiceId?: string,
    speed?: number,
  ): Promise<{ audioUrl: string; duration: number }> {
    this.logger.log(`[AUDIO-GEN] Starting practice audio generation for ${moduleId} practice ${practiceIndex}`);

    const module = await this.getModule(moduleId);
    const practice = module.practiceAssignments[practiceIndex];

    if (!practice) {
      this.logger.error(`[AUDIO-GEN] Practice ${practiceIndex} not found in module ${moduleId}`);
      throw new NotFoundException(`Practice ${practiceIndex} not found`);
    }

    // Initialize audio if it doesn't exist
    if (!practice.audio) {
      this.logger.log(`[AUDIO-GEN] Creating audio structure from instructions field`);
      practice.audio = {
        text: practice.instructions || '',
        voiceId: 'sara',
        speed: 1.00,
      };
    }

    const voiceToUse = voiceId || practice.audio.voiceId || 'sara';
    const speedToUse = speed || practice.audio.speed || 1.00;

    this.logger.log(`[AUDIO-GEN] Text length: ${practice.audio.text.length} characters`);
    this.logger.log(`[AUDIO-GEN] Voice: ${voiceToUse}, Speed: ${speedToUse}`);

    this.logger.log(`[AUDIO-GEN] Calling Speechify API...`);
    const result = await this.speechifyService.generateAudio(
      practice.audio.text,
      'exercise',
      {
        voice_id: voiceToUse,
        speed: speedToUse,
      }
    );

    this.logger.log(`[AUDIO-GEN] Speechify response received - Duration: ${result.duration_seconds}s, Characters used: ${result.characters_used}`);
    this.logger.log(`[AUDIO-GEN] Audio data type: ${typeof result.audio_data}`);

    let finalAudioUrl: string;

    // Speechify returns audio data directly, not a URL - upload to S3
    if (this.s3Service.isConfigured()) {
      this.logger.log(`[AUDIO-GEN] S3 is configured, uploading audio data to S3...`);

      try {
        // Delete old audio file if it exists
        if (practice.audio.audioUrl) {
          this.logger.log(`[AUDIO-GEN] Deleting old audio file...`);
          await this.s3Service.deleteByUrl(practice.audio.audioUrl);
        }

        const s3Key = this.s3Service.generateAssetKey(
          moduleId,
          'audio',
          `practice-${practiceIndex}.mp3`
        );

        this.logger.log(`[AUDIO-GEN] Generated S3 key: ${s3Key}`);
        this.logger.log(`[AUDIO-GEN] Uploading audio data to S3...`);

        // Convert audio data to Buffer if needed
        if (!result.audio_data) {
          throw new Error('No audio data returned from Speechify');
        }

        let audioBuffer: Buffer;
        if (Buffer.isBuffer(result.audio_data)) {
          audioBuffer = result.audio_data;
        } else {
          throw new Error('Unexpected audio data format from Speechify');
        }

        const s3Result = await this.s3Service.uploadFile(
          audioBuffer,
          s3Key,
          'audio/mpeg'
        );

        finalAudioUrl = s3Result.url;
        this.logger.log(`[AUDIO-GEN] ✅ Successfully uploaded to S3`);
        this.logger.log(`[AUDIO-GEN] CloudFront URL: ${finalAudioUrl}`);
      } catch (error) {
        this.logger.error(`[AUDIO-GEN] ❌ S3 upload failed: ${error.message}`, error.stack);
        throw new Error(`Failed to upload audio to S3: ${error.message}`);
      }
    } else {
      this.logger.error(`[AUDIO-GEN] S3 is not configured - cannot store audio`);
      throw new Error('S3 is not configured - audio storage is required');
    }

    // Update practice with generated audio
    this.logger.log(`[AUDIO-GEN] Updating module in database...`);
    practice.audio.audioUrl = finalAudioUrl;
    practice.audio.duration = result.duration_seconds;
    practice.audio.generatedAt = new Date();
    practice.audio.charactersUsed = result.characters_used;
    practice.audio.voiceId = voiceToUse;
    practice.audio.speed = speedToUse;

    await module.save();
    this.logger.log(`[AUDIO-GEN] ✅ Module saved successfully`);

    this.logger.log(`[AUDIO-GEN] 🎉 Audio generation complete for ${moduleId} practice ${practiceIndex}`);
    return {
      audioUrl: finalAudioUrl,
      duration: result.duration_seconds,
    };
  }

  /**
   * Batch generate all audio for a module
   */
  async generateAllAudio(moduleId: string): Promise<{
    slides: number;
    meditations: number;
    exercises: number;
    practices: number;
  }> {
    const module = await this.getModule(moduleId);

    this.logger.log(`Batch generating all audio for ${moduleId}`);

    const results = {
      slides: 0,
      meditations: 0,
      exercises: 0,
      practices: 0,
    };

    // Generate slide narrations
    for (let i = 0; i < module.slides.length; i++) {
      const slide = module.slides[i];
      if (slide.narration?.text && !slide.narration.audioUrl) {
        try {
          await this.generateSlideAudio(moduleId, slide.slideNumber);
          results.slides++;
        } catch (error) {
          this.logger.error(`Failed to generate slide ${slide.slideNumber}: ${error.message}`);
        }
      }
    }

    // Generate meditation audio
    for (let i = 0; i < module.meditations.length; i++) {
      const meditation = module.meditations[i];
      if (meditation.audio?.text && !meditation.audio.audioUrl) {
        try {
          await this.generateMeditationAudio(moduleId, i);
          results.meditations++;
        } catch (error) {
          this.logger.error(`Failed to generate meditation ${i}: ${error.message}`);
        }
      }
    }

    // Generate exercise audio
    for (let i = 0; i < module.exercises.length; i++) {
      const exercise = module.exercises[i];
      if (exercise.instructionAudio?.text && !exercise.instructionAudio.audioUrl) {
        try {
          await this.generateExerciseAudio(moduleId, i);
          results.exercises++;
        } catch (error) {
          this.logger.error(`Failed to generate exercise ${i}: ${error.message}`);
        }
      }
    }

    // Generate practice audio
    for (let i = 0; i < module.practiceAssignments.length; i++) {
      const practice = module.practiceAssignments[i];
      if (practice.audio?.text && !practice.audio.audioUrl) {
        try {
          await this.generatePracticeAudio(moduleId, i);
          results.practices++;
        } catch (error) {
          this.logger.error(`Failed to generate practice ${i}: ${error.message}`);
        }
      }
    }

    this.logger.log(`Batch generation complete: ${JSON.stringify(results)}`);

    return results;
  }

  /**
   * Upload/update slide visual
   */
  async updateSlideVisual(
    moduleId: string,
    slideNumber: number,
    visualUrl: string,
  ): Promise<void> {
    const module = await this.getModule(moduleId);
    const slide = module.slides.find(s => s.slideNumber === slideNumber);

    if (!slide) {
      throw new NotFoundException(`Slide ${slideNumber} not found`);
    }

    let finalVisualUrl = visualUrl;

    // If it's a base64 data URL, upload to S3
    if (visualUrl.startsWith('data:') && this.s3Service.isConfigured()) {
      try {
        // Delete old visual if it exists
        if (slide.visualUrl) {
          this.logger.log(`Deleting old slide visual...`);
          await this.s3Service.deleteByUrl(slide.visualUrl);
        }

        // Determine file extension from data URL
        const mimeType = visualUrl.match(/data:([^;]+)/)?.[1] || 'image/png';
        const extension = mimeType.split('/')[1] || 'png';

        const s3Key = this.s3Service.generateAssetKey(
          moduleId,
          'image',
          `slide-${slideNumber}-visual.${extension}`
        );

        const s3Result = await this.s3Service.uploadBase64(
          visualUrl,
          s3Key,
          mimeType
        );

        finalVisualUrl = s3Result.url;
        this.logger.log(`Visual uploaded to S3: ${finalVisualUrl}`);
      } catch (error) {
        this.logger.warn(`Failed to upload visual to S3: ${error.message}`);
        // Fall back to storing base64 (not ideal but better than failing)
      }
    }

    slide.visualUrl = finalVisualUrl;
    await module.save();

    this.logger.log(`Updated slide ${slideNumber} visual for ${moduleId}`);
  }

  /**
   * Upload slide visual from PDF (with page extraction)
   * NOTE: Client now handles PDF→PNG conversion using PDF.js
   * This endpoint is deprecated - use uploadSlideVisualFromImage instead
   */
  async uploadSlideVisualFromPdf(
    moduleId: string,
    slideNumber: number,
    pdfBuffer: Buffer,
    pageNumber: number,
  ): Promise<string> {
    this.logger.warn('uploadSlideVisualFromPdf is deprecated. Client should use uploadSlideVisualFromImage with PNG blob.');

    // Fallback: treat as image upload (though this won't work correctly)
    return this.uploadSlideVisualFromImage(
      moduleId,
      slideNumber,
      pdfBuffer,
      'application/pdf',
    );
  }

  /**
   * Upload slide visual from image file
   */
  async uploadSlideVisualFromImage(
    moduleId: string,
    slideNumber: number,
    imageBuffer: Buffer,
    mimeType: string,
  ): Promise<string> {
    const module = await this.getModule(moduleId);
    const slide = module.slides.find(s => s.slideNumber === slideNumber);

    if (!slide) {
      throw new NotFoundException(`Slide ${slideNumber} not found`);
    }

    // Delete old visual if exists
    if (slide.visualUrl) {
      try {
        await this.s3Service.deleteByUrl(slide.visualUrl);
      } catch (error) {
        this.logger.warn(`Failed to delete old visual: ${error.message}`);
      }
    }

    // Determine extension
    const extension = mimeType.split('/')[1] || 'png';

    const s3Key = this.s3Service.generateAssetKey(
      moduleId,
      'image',
      `slide-${slideNumber}-visual.${extension}`,
    );

    const s3Result = await this.s3Service.uploadBuffer(
      imageBuffer,
      s3Key,
      mimeType,
    );

    // Update slide with new visual URL
    slide.visualUrl = s3Result.url;
    await module.save();

    this.logger.log(`Uploaded image visual for slide ${slideNumber}`);

    return s3Result.url;
  }

  /**
   * Delete a module
   */
  async deleteModule(moduleId: string): Promise<void> {
    const result = await this.trainingModuleModel.deleteOne({ moduleId }).exec();
    if (result.deletedCount === 0) {
      throw new NotFoundException(`Module ${moduleId} not found`);
    }
    this.logger.log(`Deleted module: ${moduleId}`);
  }
}
