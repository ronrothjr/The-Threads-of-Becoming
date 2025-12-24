import {
  Controller,
  Post,
  Get,
  Put,
  Body,
  Param,
  UseGuards,
  Request,
} from '@nestjs/common';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';
import { PracticeService } from './practice.service';

@Controller('practice')
export class PracticeController {
  constructor(private practiceService: PracticeService) {}

  @UseGuards(JwtAuthGuard)
  @Post('log')
  async logPractice(
    @Request() req,
    @Body()
    body: {
      threadId: string;
      practiceType: string;
      notes?: string;
    },
  ) {
    return this.practiceService.logPractice(
      req.user.userId,
      body.threadId,
      body.practiceType,
      body.notes,
    );
  }

  @UseGuards(JwtAuthGuard)
  @Get('history')
  async getPracticeHistory(@Request() req) {
    return this.practiceService.getPracticeHistory(req.user.userId);
  }

  @UseGuards(JwtAuthGuard)
  @Get('stats')
  async getStats(@Request() req) {
    return this.practiceService.getStats(req.user.userId);
  }

  @UseGuards(JwtAuthGuard)
  @Get('analytics')
  async getAnalytics(@Request() req) {
    return this.practiceService.getAnalytics(req.user.userId);
  }

  @UseGuards(JwtAuthGuard)
  @Put(':id')
  async updatePractice(
    @Request() req,
    @Param('id') id: string,
    @Body()
    body: {
      notes?: string;
    },
  ) {
    return this.practiceService.updatePractice(req.user.userId, id, body.notes);
  }
}
