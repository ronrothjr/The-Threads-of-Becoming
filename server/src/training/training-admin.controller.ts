import {
  Controller,
  Get,
  Post,
  Put,
  Delete,
  Body,
  Param,
  Query,
  UseGuards,
  Logger,
  BadRequestException,
  Req,
} from '@nestjs/common';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';
import { TrainingAdminService } from './training-admin.service';
import type { FastifyRequest } from 'fastify';
import type { MultipartFile } from '@fastify/multipart';

@Controller('admin/training')
@UseGuards(JwtAuthGuard) // In development, all logged-in users have access
export class TrainingAdminController {
  private readonly logger = new Logger(TrainingAdminController.name);

  constructor(private adminService: TrainingAdminService) {}

  /**
   * Get all training modules
   */
  @Get('modules')
  async getAllModules() {
    return this.adminService.getAllModules();
  }

  /**
   * Get single module by ID
   */
  @Get('modules/:moduleId')
  async getModule(@Param('moduleId') moduleId: string) {
    return this.adminService.getModule(moduleId);
  }

  /**
   * Create or update a module
   */
  @Post('modules')
  async saveModule(@Body() moduleData: any) {
    return this.adminService.saveModule(moduleData);
  }

  /**
   * Delete a module
   */
  @Delete('modules/:moduleId')
  async deleteModule(@Param('moduleId') moduleId: string) {
    await this.adminService.deleteModule(moduleId);
    return { message: 'Module deleted successfully' };
  }

  /**
   * Update script text
   */
  @Put('modules/:moduleId/:contentType/:index/script')
  async updateScript(
    @Param('moduleId') moduleId: string,
    @Param('contentType') contentType: 'slides' | 'meditations' | 'exercises' | 'practices',
    @Param('index') index: string,
    @Body() body: { text: string },
  ) {
    await this.adminService.updateScript(
      moduleId,
      contentType,
      parseInt(index),
      body.text,
    );
    return { message: 'Script updated successfully' };
  }

  /**
   * Generate audio for slide narration
   */
  @Post('modules/:moduleId/slides/:slideNumber/audio')
  async generateSlideAudio(
    @Param('moduleId') moduleId: string,
    @Param('slideNumber') slideNumber: string,
    @Body() body: { voiceId?: string; speed?: number; text?: string },
  ) {
    this.logger.log(`Generating slide audio: ${moduleId} slide ${slideNumber}`);
    return this.adminService.generateSlideAudio(
      moduleId,
      parseInt(slideNumber),
      body.voiceId,
      body.speed,
      body.text,
    );
  }

  /**
   * Generate audio for meditation
   */
  @Post('modules/:moduleId/meditations/:index/audio')
  async generateMeditationAudio(
    @Param('moduleId') moduleId: string,
    @Param('index') index: string,
    @Body() body: { voiceId?: string; speed?: number; emotion?: string },
  ) {
    this.logger.log(`Generating meditation audio: ${moduleId} meditation ${index}`);
    return this.adminService.generateMeditationAudio(
      moduleId,
      parseInt(index),
      body.voiceId,
      body.speed,
      body.emotion,
    );
  }

  /**
   * Get available Speechify voices (premium + cloned)
   */
  @Get('voices')
  async getVoices() {
    this.logger.log('Fetching available Speechify voices');
    return this.adminService.getAvailableVoices();
  }

  /**
   * Generate audio for exercise
   */
  @Post('modules/:moduleId/exercises/:index/audio')
  async generateExerciseAudio(
    @Param('moduleId') moduleId: string,
    @Param('index') index: string,
    @Body() body: { voiceId?: string; speed?: number },
  ) {
    this.logger.log(`Generating exercise audio: ${moduleId} exercise ${index}`);
    return this.adminService.generateExerciseAudio(
      moduleId,
      parseInt(index),
      body.voiceId,
      body.speed,
    );
  }

  /**
   * Generate audio for practice assignment
   */
  @Post('modules/:moduleId/practices/:index/audio')
  async generatePracticeAudio(
    @Param('moduleId') moduleId: string,
    @Param('index') index: string,
    @Body() body: { voiceId?: string; speed?: number },
  ) {
    this.logger.log(`Generating practice audio: ${moduleId} practice ${index}`);
    return this.adminService.generatePracticeAudio(
      moduleId,
      parseInt(index),
      body.voiceId,
      body.speed,
    );
  }

  /**
   * Batch generate all audio for a module
   */
  @Post('modules/:moduleId/audio/generate-all')
  async generateAllAudio(@Param('moduleId') moduleId: string) {
    this.logger.log(`Batch generating all audio for: ${moduleId}`);
    return this.adminService.generateAllAudio(moduleId);
  }

  /**
   * Update slide visual URL
   */
  @Put('modules/:moduleId/slides/:slideNumber/visual')
  async updateSlideVisual(
    @Param('moduleId') moduleId: string,
    @Param('slideNumber') slideNumber: string,
    @Body() body: { visualUrl: string },
  ) {
    await this.adminService.updateSlideVisual(
      moduleId,
      parseInt(slideNumber),
      body.visualUrl,
    );
    return { message: 'Slide visual updated' };
  }

  /**
   * Upload PDF and extract specific page as slide visual
   * Client sends PDF file, we extract the page server-side and upload to S3
   */
  @Post('modules/:moduleId/slides/:slideNumber/upload-pdf')
  async uploadPdfSlide(
    @Req() request: FastifyRequest & { file: () => Promise<MultipartFile> },
    @Param('moduleId') moduleId: string,
    @Param('slideNumber') slideNumber: string,
  ) {
    const data = await request.file();

    if (!data) {
      throw new BadRequestException('No PDF file uploaded');
    }

    if (data.mimetype !== 'application/pdf') {
      throw new BadRequestException('File must be a PDF');
    }

    // Get the buffer from the file stream
    const buffer = await data.toBuffer();

    // Get pageNumber from fields if provided
    const fields = data.fields as any;
    const pageNumber = fields?.pageNumber?.value || '1';

    this.logger.log(
      `Processing PDF upload for ${moduleId} slide ${slideNumber}, page ${pageNumber}`,
    );

    // For now, just upload the PDF to S3
    // TODO: Add PDF-to-image conversion server-side
    const visualUrl = await this.adminService.uploadSlideVisualFromPdf(
      moduleId,
      parseInt(slideNumber),
      buffer,
      parseInt(pageNumber),
    );

    return {
      message: 'PDF uploaded and processed',
      visualUrl,
    };
  }

  /**
   * Upload image directly as slide visual
   */
  @Post('modules/:moduleId/slides/:slideNumber/upload-image')
  async uploadImageSlide(
    @Req() request: FastifyRequest & { file: () => Promise<MultipartFile> },
    @Param('moduleId') moduleId: string,
    @Param('slideNumber') slideNumber: string,
  ) {
    const data = await request.file();

    if (!data) {
      throw new BadRequestException('No image file uploaded');
    }

    const allowedTypes = ['image/png', 'image/jpeg', 'image/jpg', 'image/webp'];
    if (!allowedTypes.includes(data.mimetype)) {
      throw new BadRequestException('File must be an image (PNG, JPEG, or WebP)');
    }

    this.logger.log(`Uploading image for ${moduleId} slide ${slideNumber}`);

    // Get the buffer from the file stream
    const buffer = await data.toBuffer();

    const visualUrl = await this.adminService.uploadSlideVisualFromImage(
      moduleId,
      parseInt(slideNumber),
      buffer,
      data.mimetype,
    );

    return {
      message: 'Image uploaded',
      visualUrl,
    };
  }
}
