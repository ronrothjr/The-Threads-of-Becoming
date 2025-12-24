import { Controller, Post, Get, Body, UseGuards, Request } from '@nestjs/common';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';
import { AssessmentsService } from './assessments.service';

@Controller('assessments')
export class AssessmentsController {
  constructor(private assessmentsService: AssessmentsService) {}

  @UseGuards(JwtAuthGuard)
  @Post('quick-profile')
  async submitQuickProfile(
    @Request() req,
    @Body()
    body: {
      responses: Array<{
        questionId: string;
        answer: 'A' | 'B' | 'C' | 'D';
      }>;
    },
  ) {
    return this.assessmentsService.submitQuickProfile(
      req.user.userId,
      body.responses,
    );
  }

  @UseGuards(JwtAuthGuard)
  @Get('quick-profile/results')
  async getQuickProfileResults(@Request() req) {
    return this.assessmentsService.getQuickProfileResults(req.user.userId);
  }

  @UseGuards(JwtAuthGuard)
  @Get('history')
  async getAssessmentHistory(@Request() req) {
    return this.assessmentsService.getAssessmentHistory(req.user.userId);
  }

  @UseGuards(JwtAuthGuard)
  @Get('status')
  async getAssessmentStatus(@Request() req) {
    const hasCompleted =
      await this.assessmentsService.hasCompletedQuickProfile(req.user.userId);
    const hasPartial =
      await this.assessmentsService.hasPartialQuickProfile(req.user.userId);
    const subscription = await this.assessmentsService.getUserSubscription(
      req.user.userId,
    );
    const retakeInfo =
      await this.assessmentsService.getQuickProfileRetakeInfo(req.user.userId);

    return {
      quickProfileCompleted: hasCompleted,
      hasPartialQuickProfile: hasPartial,
      ...subscription,
      ...retakeInfo,
    };
  }

  @UseGuards(JwtAuthGuard)
  @Post('quick-profile/partial')
  async savePartialQuickProfile(
    @Request() req,
    @Body()
    body: {
      responses: Array<{
        questionId: string;
        answer: 'A' | 'B' | 'C' | 'D';
      }>;
      questionOrder?: string[];
    },
  ) {
    return this.assessmentsService.savePartialQuickProfile(
      req.user.userId,
      body.responses,
      body.questionOrder,
    );
  }

  @UseGuards(JwtAuthGuard)
  @Get('quick-profile/partial')
  async getPartialQuickProfile(@Request() req) {
    return this.assessmentsService.getPartialQuickProfile(req.user.userId);
  }

  @UseGuards(JwtAuthGuard)
  @Get('unlock-status')
  async getUnlockStatus(@Request() req) {
    return this.assessmentsService.getUnlockStatus(req.user.userId);
  }
}
