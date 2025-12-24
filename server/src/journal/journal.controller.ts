import {
  Controller,
  Post,
  Get,
  Put,
  Delete,
  Body,
  Param,
  UseGuards,
  Request,
} from '@nestjs/common';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';
import { JournalService } from './journal.service';

@Controller('journal')
export class JournalController {
  constructor(private journalService: JournalService) {}

  @UseGuards(JwtAuthGuard)
  @Post()
  async createEntry(
    @Request() req,
    @Body()
    body: {
      threadFocus: string;
      content: string;
      practiceType?: string;
      experiencedAt?: string;
      tags?: string[];
    },
  ) {
    return this.journalService.createEntry(
      req.user.userId,
      body.threadFocus,
      body.content,
      body.practiceType,
      body.experiencedAt ? new Date(body.experiencedAt) : undefined,
      body.tags,
    );
  }

  @UseGuards(JwtAuthGuard)
  @Get()
  async getEntries(@Request() req) {
    return this.journalService.getEntries(req.user.userId);
  }

  @UseGuards(JwtAuthGuard)
  @Get('stats')
  async getStats(@Request() req) {
    return this.journalService.getStats(req.user.userId);
  }

  @UseGuards(JwtAuthGuard)
  @Put(':id')
  async updateEntry(
    @Request() req,
    @Param('id') id: string,
    @Body()
    body: {
      threadFocus?: string;
      content?: string;
      practiceType?: string;
      tags?: string[];
    },
  ) {
    return this.journalService.updateEntry(req.user.userId, id, body);
  }

  @UseGuards(JwtAuthGuard)
  @Delete(':id')
  async deleteEntry(@Request() req, @Param('id') id: string) {
    return this.journalService.deleteEntry(req.user.userId, id);
  }
}
