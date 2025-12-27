import { Controller, Get, Post, Put, Param, Body, Request, UseGuards } from '@nestjs/common';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';
import { PracticeAssignmentService } from './practice-assignment.service';

@Controller('practice-assignments')
export class PracticeAssignmentController {
  constructor(private readonly practiceAssignmentService: PracticeAssignmentService) {}

  /**
   * Get all pending practice assignments for the current user
   */
  @UseGuards(JwtAuthGuard)
  @Get('pending')
  async getPendingAssignments(@Request() req) {
    return this.practiceAssignmentService.getPendingAssignments(req.user.userId);
  }

  /**
   * Get upcoming practice assignments (not yet due)
   */
  @UseGuards(JwtAuthGuard)
  @Get('upcoming')
  async getUpcomingAssignments(@Request() req) {
    return this.practiceAssignmentService.getUpcomingAssignments(req.user.userId);
  }

  /**
   * Get a specific assignment
   */
  @UseGuards(JwtAuthGuard)
  @Get(':assignmentId')
  async getAssignment(@Request() req, @Param('assignmentId') assignmentId: string) {
    return this.practiceAssignmentService.getAssignment(req.user.userId, assignmentId);
  }

  /**
   * Submit a response to a practice assignment
   */
  @UseGuards(JwtAuthGuard)
  @Post(':assignmentId/submit')
  async submitResponse(
    @Request() req,
    @Param('assignmentId') assignmentId: string,
    @Body('response') response: string,
  ) {
    return this.practiceAssignmentService.submitResponse(req.user.userId, assignmentId, response);
  }

  /**
   * Skip a practice assignment
   */
  @UseGuards(JwtAuthGuard)
  @Post(':assignmentId/skip')
  async skipAssignment(@Request() req, @Param('assignmentId') assignmentId: string) {
    return this.practiceAssignmentService.skipAssignment(req.user.userId, assignmentId);
  }

  /**
   * Get completed assignments
   */
  @UseGuards(JwtAuthGuard)
  @Get('completed/all')
  async getCompletedAssignments(@Request() req) {
    return this.practiceAssignmentService.getCompletedAssignments(req.user.userId);
  }

  /**
   * Get assignment statistics
   */
  @UseGuards(JwtAuthGuard)
  @Get('stats/summary')
  async getAssignmentStats(@Request() req) {
    return this.practiceAssignmentService.getAssignmentStats(req.user.userId);
  }
}
