import { Injectable, Logger } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import axios from 'axios';

interface SpeechifyVoiceSettings {
  voice_id?: string; // Default: 'henry' (natural male voice)
  model?: string; // Default: 'simba-english'
  speed?: number; // 0.5 to 2.0, default: 1.0
  output_format?: 'mp3' | 'wav' | 'ogg'; // Default: 'mp3'
}

interface SpeechifyResponse {
  audio_url: string | null;
  audio_data?: Buffer; // Binary audio data
  duration_seconds: number;
  characters_used: number;
}

export interface SpeechifyVoice {
  voice_id: string;
  name: string;
  language?: string;
  gender?: string;
  type?: 'shared' | 'personal'; // 'shared' = system voices, 'personal' = cloned
  model?: string;
  is_premium?: boolean;
}

@Injectable()
export class SpeechifyService {
  private readonly logger = new Logger(SpeechifyService.name);
  private readonly apiKey: string;
  private readonly baseUrl = 'https://api.sws.speechify.com';

  constructor(private configService: ConfigService) {
    this.apiKey = this.configService.get<string>('SPEECHIFY_API_KEY') || '';

    if (!this.apiKey || this.apiKey === 'your_api_key_here') {
      this.logger.warn('Speechify API key not configured. Audio generation will fail.');
      this.logger.debug(`SPEECHIFY_API_KEY value: ${this.apiKey || '(empty)'}`);
    } else {
      this.logger.log(`Speechify service initialized with API key: ${this.apiKey.substring(0, 10)}...`);
    }
  }

  /**
   * Generate audio from text using Speechify API
   *
   * @param text - The text to convert to speech
   * @param contentType - Type of content (affects voice settings)
   * @param customSettings - Override default voice settings
   * @returns Audio URL and metadata
   */
  async generateAudio(
    text: string,
    contentType: 'narration' | 'meditation' | 'exercise' = 'narration',
    customSettings?: SpeechifyVoiceSettings
  ): Promise<SpeechifyResponse> {
    if (!this.apiKey || this.apiKey === 'your_api_key_here') {
      throw new Error('Speechify API key not configured');
    }

    // Get default settings based on content type
    const defaultSettings = this.getDefaultSettings(contentType);
    const settings = { ...defaultSettings, ...customSettings };

    try {
      this.logger.log(`Generating ${contentType} audio (${text.length} characters)`);

      const requestBody = {
        input: text,
        voice_id: settings.voice_id,
        model: settings.model,
        speed: settings.speed,
        audio_format: settings.output_format || 'mp3',
      };

      this.logger.log(`Speechify request: voice=${requestBody.voice_id}, speed=${requestBody.speed}, model=${requestBody.model}`);

      // Request binary audio data by setting responseType to arraybuffer
      const response = await axios.post(
        `${this.baseUrl}/v1/audio/speech`,
        requestBody,
        {
          headers: {
            'Authorization': `Bearer ${this.apiKey}`,
            'Content-Type': 'application/json',
          },
          timeout: 60000, // 60 second timeout
        }
      );

      this.logger.log(`Speechify API response - Content-Type: ${response.headers['content-type']}`);
      this.logger.log(`Response data keys: ${Object.keys(response.data).join(', ')}`);

      // Speechify returns JSON with base64-encoded audio
      const audioDataBase64 = response.data.audio_data || response.data.audioData || response.data.data;

      if (!audioDataBase64) {
        this.logger.error(`No audio data in response. Keys: ${Object.keys(response.data).join(', ')}`);
        throw new Error('Speechify API did not return audio data');
      }

      // Convert base64 to Buffer
      const audioBuffer = Buffer.from(audioDataBase64, 'base64');

      this.logger.log(`Audio generated successfully - ${audioBuffer.length} bytes (${(audioBuffer.length / 1024).toFixed(2)} KB)`);

      return {
        audio_url: null, // No URL provided - audio data is in response
        audio_data: audioBuffer,
        duration_seconds: response.data.duration_seconds || response.data.duration || 0,
        characters_used: response.data.characters_used || text.length,
      };

    } catch (error) {
      this.logger.error(`Failed to generate audio: ${error.message}`, error.stack);

      if (error.response) {
        this.logger.error(`Speechify API error: ${JSON.stringify(error.response.data)}`);
      }

      throw new Error(`Audio generation failed: ${error.message}`);
    }
  }

  /**
   * Generate audio for slide narration
   * - Moderate pace (0.9x speed)
   * - Clear articulation
   * - Natural male voice
   */
  async generateNarration(script: string, customSettings?: SpeechifyVoiceSettings): Promise<SpeechifyResponse> {
    return this.generateAudio(script, 'narration', customSettings);
  }

  /**
   * Generate audio for guided meditation
   * - Slower pace (0.8x speed)
   * - Calming tone
   * - Respects timing notation (~, ~~, ~~~)
   */
  async generateMeditation(script: string, customSettings?: SpeechifyVoiceSettings, emotion?: string): Promise<SpeechifyResponse> {
    // Process timing notation for pauses and apply emotion
    const processedScript = this.processMeditationScript(script, emotion);
    return this.generateAudio(processedScript, 'meditation', customSettings);
  }

  /**
   * Generate audio for exercise instructions
   * - Normal pace (1.0x speed)
   * - Clear and directive
   */
  async generateExerciseInstructions(script: string, customSettings?: SpeechifyVoiceSettings): Promise<SpeechifyResponse> {
    return this.generateAudio(script, 'exercise', customSettings);
  }

  /**
   * Get available voices from Speechify
   */
  async getAvailableVoices(): Promise<any[]> {
    if (!this.apiKey || this.apiKey === 'your_api_key_here') {
      throw new Error('Speechify API key not configured');
    }

    try {
      const response = await axios.get(`${this.baseUrl}/v1/voices`, {
        headers: {
          'Authorization': `Bearer ${this.apiKey}`,
        },
      });

      // Response is an array of voice objects directly
      const voices = Array.isArray(response.data) ? response.data : [];

      this.logger.log(`Fetched ${voices.length} voices from Speechify`);

      // Map to simpler format for frontend
      return voices.map(voice => ({
        voice_id: voice.id,
        name: voice.display_name,
        gender: voice.gender,
        locale: voice.locale,
        type: voice.type,
      }));
    } catch (error) {
      this.logger.error(`Failed to fetch voices: ${error.message}`);
      throw new Error(`Failed to fetch available voices: ${error.message}`);
    }
  }

  /**
   * Get default voice settings based on content type
   */
  private getDefaultSettings(contentType: 'narration' | 'meditation' | 'exercise'): SpeechifyVoiceSettings {
    const baseSettings = {
      model: 'simba-english',
      output_format: 'mp3' as const,
    };

    switch (contentType) {
      case 'narration':
        return {
          ...baseSettings,
          voice_id: 'henry', // Natural male voice
          speed: 0.9, // Moderate pace
        };

      case 'meditation':
        return {
          ...baseSettings,
          voice_id: 'george', // Calming voice
          speed: 0.8, // Slower for meditation
        };

      case 'exercise':
        return {
          ...baseSettings,
          voice_id: 'henry',
          speed: 1.0, // Normal pace
        };

      default:
        return {
          ...baseSettings,
          voice_id: 'henry',
          speed: 1.0,
        };
    }
  }

  /**
   * Process meditation script to convert timing notation to actual pauses
   *
   * Timing notation:
   * [~]   = 1 second pause (half breath)
   * [~~]  = 2 seconds pause (full breath)
   * [~~~] = 4 seconds pause (extended)
   *
   * SSML Features:
   * - Uses calm/relaxed emotional tone for meditation guidance
   * - Applies slower cadence for peaceful delivery
   * - Slightly lower pitch for soothing quality
   */
  private processMeditationScript(script: string, emotion?: string): string {
    // Speechify uses SSML for pauses, emotion, and prosody control

    let processed = script;

    // Replace timing notation with SSML breaks
    processed = processed.replace(/\[~~~\]/g, '<break time="4s"/>'); // Extended pause
    processed = processed.replace(/\[~~\]/g, '<break time="2s"/>');  // Full breath
    processed = processed.replace(/\[~\]/g, '<break time="1s"/>');   // Half breath

    // Wrap with speak tags (emotion support needs further investigation)
    // TODO: Re-enable emotion tags once we confirm the correct Speechify syntax
    processed = `<speak>${processed}</speak>`;

    this.logger.log(`[SSML] Processed meditation script with breaks`);
    this.logger.log(`[SSML] First 200 chars: ${processed.substring(0, 200)}`);

    return processed;
  }

  /**
   * Estimate audio duration based on text length and speed
   * Average speaking rate: 150 words per minute at 1.0x speed
   */
  estimateDuration(text: string, speed: number = 1.0): number {
    const wordCount = text.split(/\s+/).length;
    const baseWordsPerMinute = 150;
    const adjustedWordsPerMinute = baseWordsPerMinute * speed;
    const durationMinutes = wordCount / adjustedWordsPerMinute;
    const durationSeconds = Math.ceil(durationMinutes * 60);

    return durationSeconds;
  }

  /**
   * Get list of available voices from Speechify API
   * Includes both system (shared) voices and personal (cloned) voices
   */
  async getVoices(): Promise<SpeechifyVoice[]> {
    if (!this.apiKey || this.apiKey === 'your_api_key_here') {
      throw new Error('Speechify API key not configured');
    }

    try {
      this.logger.log(`[VOICES] Fetching from: ${this.baseUrl}/v1/voices`);
      const response = await axios.get(
        `${this.baseUrl}/v1/voices`,
        {
          headers: {
            'Authorization': `Bearer ${this.apiKey}`,
          },
          timeout: 10000,
        }
      );

      this.logger.log(`[VOICES] Response status: ${response.status}`);
      this.logger.log(`[VOICES] Response data type: ${typeof response.data}`);
      this.logger.log(`[VOICES] Response data is array: ${Array.isArray(response.data)}`);
      this.logger.log(`[VOICES] Response data keys:`, JSON.stringify(Object.keys(response.data || {})));
      this.logger.log(`[VOICES] Full response (first 1000 chars):`, JSON.stringify(response.data).substring(0, 1000));

      // Speechify API returns a direct array of voice objects
      if (!Array.isArray(response.data)) {
        this.logger.error(`[VOICES] Unexpected response structure - expected array, got ${typeof response.data}`);
        return this.getFallbackVoices();
      }

      // Map Speechify voice format to our interface
      const voices: SpeechifyVoice[] = response.data.map((voice: any) => ({
        voice_id: voice.id,
        name: voice.display_name || voice.id,
        language: voice.locale,
        gender: voice.gender,
        type: voice.type, // 'shared' or 'personal' (cloned)
        model: voice.models?.[0]?.name, // First available model
        is_premium: voice.models?.some((m: any) => m.name.includes('simba')) || voice.type === 'personal',
      }));

      this.logger.log(`[VOICES] Successfully fetched ${voices.length} voices from Speechify`);
      return voices;
    } catch (error) {
      this.logger.error(`[VOICES] ❌ Failed to fetch voices from Speechify API: ${error.message}`);
      if (error.response) {
        this.logger.error(`[VOICES] Response status: ${error.response.status}`);
        this.logger.error(`[VOICES] Response data:`, JSON.stringify(error.response.data).substring(0, 500));
      }
      // Return fallback list of known premium voices
      return this.getFallbackVoices();
    }
  }

  /**
   * Get fallback list of premium AI-enhanced voices
   * Used when API call fails
   */
  private getFallbackVoices(): SpeechifyVoice[] {
    return [
      { voice_id: 'george', name: 'George', gender: 'male', type: 'shared', is_premium: true },
      { voice_id: 'henry', name: 'Henry', gender: 'male', type: 'shared', is_premium: true },
      { voice_id: 'snoop', name: 'Snoop', gender: 'male', type: 'shared', is_premium: true },
      { voice_id: 'mrbeast', name: 'MrBeast', gender: 'male', type: 'shared', is_premium: true },
      { voice_id: 'gwyneth', name: 'Gwyneth', gender: 'female', type: 'shared', is_premium: true },
      { voice_id: 'nova', name: 'Nova', gender: 'female', type: 'shared', is_premium: true },
      { voice_id: 'cliff', name: 'Cliff', gender: 'male', type: 'shared', is_premium: true },
      { voice_id: 'stella', name: 'Stella', gender: 'female', type: 'shared', is_premium: true },
    ];
  }

  /**
   * Check if API key is configured
   */
  isConfigured(): boolean {
    return !!(this.apiKey && this.apiKey !== 'your_api_key_here');
  }
}
