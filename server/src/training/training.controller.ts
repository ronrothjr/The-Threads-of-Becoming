import { Controller, Post, Get, Body, UseGuards, Request, Param, Logger } from '@nestjs/common';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';
import { TrainingService } from './training.service';

@Controller('training')
export class TrainingController {
  private readonly logger = new Logger(TrainingController.name);

  constructor(private trainingService: TrainingService) {}

  @UseGuards(JwtAuthGuard)
  @Post('initialize')
  async initializeProgram(
    @Request() req,
    @Body() body: {
      growthEdges: string[];
      intensity: 'gentle' | 'moderate' | 'challenging';
      duration: number;
      learningStyle: string[];
      sessionsPerWeek: number;
    }
  ) {
    try {
      this.logger.log(`Initializing training for user ${req.user.userId} with config: ${JSON.stringify(body)}`);
      const result = await this.trainingService.initializeTrainingProgram(req.user.userId, body);
      this.logger.log(`Training initialized successfully for user ${req.user.userId}`);
      return result;
    } catch (error) {
      this.logger.error(`Failed to initialize training for user ${req.user.userId}:`, error.stack);
      throw error;
    }
  }

  @UseGuards(JwtAuthGuard)
  @Get('progress')
  async getProgress(@Request() req) {
    return this.trainingService.getTrainingProgress(req.user.userId);
  }

  @UseGuards(JwtAuthGuard)
  @Get('modules/with-progress')
  async getModulesWithProgress(@Request() req) {
    return this.trainingService.getAllModulesWithProgress(req.user.userId);
  }

  @UseGuards(JwtAuthGuard)
  @Post('session/next')
  async generateNextSession(@Request() req) {
    return this.trainingService.generateNextSession(req.user.userId);
  }

  @UseGuards(JwtAuthGuard)
  @Post('session/:sessionId/start')
  async startSession(@Request() req, @Param('sessionId') sessionId: string) {
    return this.trainingService.startSession(req.user.userId, sessionId);
  }

  @UseGuards(JwtAuthGuard)
  @Post('session/:sessionId/complete')
  async completeSession(
    @Request() req,
    @Param('sessionId') sessionId: string,
    @Body() body: {
      activityResponses: any[];
      postSessionRating: number;
      insights: string;
      homeworkCommitment?: string;
    }
  ) {
    return this.trainingService.completeSession(req.user.userId, sessionId, body);
  }

  @UseGuards(JwtAuthGuard)
  @Get('modules/:moduleId')
  async getModule(@Param('moduleId') moduleId: string) {
    return this.trainingService.getModuleForUser(moduleId);
  }

  @UseGuards(JwtAuthGuard)
  @Get('modules')
  async getAvailableModules(@Request() req) {
    return this.trainingService.getAvailableModules(req.user.userId);
  }

  @UseGuards(JwtAuthGuard)
  @Post('modules/:moduleId/complete')
  async completeModule(@Request() req, @Param('moduleId') moduleId: string, @Body() body: any) {
    return this.trainingService.completeModule(req.user.userId, moduleId, body);
  }

  @UseGuards(JwtAuthGuard)
  @Get('modules/:moduleId/progress')
  async getModuleProgress(@Request() req, @Param('moduleId') moduleId: string) {
    return this.trainingService.getModuleProgress(req.user.userId, moduleId);
  }

  @UseGuards(JwtAuthGuard)
  @Post('modules/:moduleId/progress')
  async saveModuleProgress(@Request() req, @Param('moduleId') moduleId: string, @Body() body: any) {
    return this.trainingService.saveModuleProgress(req.user.userId, moduleId, body);
  }
}
