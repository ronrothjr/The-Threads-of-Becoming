import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Types } from 'mongoose';

export type PracticeAssignmentResponseDocument = PracticeAssignmentResponse & Document;

// A user's response to a practice assignment (writing prompt or practice task)
@Schema({ timestamps: true })
export class PracticeAssignmentResponse {
  @Prop({ type: Types.ObjectId, ref: 'User', required: true })
  userId: Types.ObjectId;

  @Prop({ required: true })
  moduleId: string; // e.g., 'pause-foundation'

  @Prop({ required: true })
  assignmentType: string; // 'writing-prompt' | 'practice-task' | 'weekly-reflection'

  @Prop({ required: true })
  assignmentIndex: number; // Index in the module's writingPrompts or practiceAssignments array

  @Prop({ required: true })
  prompt: string; // The actual prompt text for reference

  @Prop({ type: Date })
  scheduledDate?: Date; // When this should be shown to the user

  @Prop({ type: Date })
  completedAt?: Date;

  @Prop()
  response?: string; // User's written response

  @Prop({ default: false })
  skipped: boolean;

  @Prop({ type: Object })
  metadata?: any; // Additional data (e.g., time spent, word count)
}

export const PracticeAssignmentResponseSchema = SchemaFactory.createForClass(PracticeAssignmentResponse);

// Indexes for efficient queries
PracticeAssignmentResponseSchema.index({ userId: 1, moduleId: 1 });
PracticeAssignmentResponseSchema.index({ userId: 1, scheduledDate: 1 });
PracticeAssignmentResponseSchema.index({ userId: 1, completedAt: 1 });
