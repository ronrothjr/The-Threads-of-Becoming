import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Types } from 'mongoose';

export type TrainingProgressDocument = TrainingProgress & Document;

@Schema({ timestamps: true })
export class TrainingProgress {
  @Prop({ type: Types.ObjectId, ref: 'User', required: true, unique: true })
  userId: Types.ObjectId;

  // Program configuration
  @Prop({ required: true })
  programStartDate: Date;

  @Prop()
  totalWeeks?: number;

  @Prop({ default: 1 })
  currentWeek: number;

  // Focus areas
  @Prop({ type: [String], required: true })
  primaryThreads: string[];

  @Prop({ type: [String], default: [] })
  secondaryThreads: string[];

  @Prop()
  primaryPattern?: string;

  // Settings
  @Prop({ required: true, enum: ['gentle', 'moderate', 'challenging'] })
  intensity: string;

  @Prop({ required: true })
  sessionsPerWeek: number;

  @Prop()
  averageDuration?: number;

  // Overall progress
  @Prop({ default: 0 })
  totalSessionsCompleted: number;

  @Prop({ default: 0 })
  totalTimeSpent: number; // minutes

  @Prop({ default: 0 })
  currentStreak: number;

  @Prop({ default: 0 })
  longestStreak: number;

  // Capacity tracking (per thread)
  @Prop({
    type: Object,
    default: {},
  })
  threadProgress: {
    [threadName: string]: {
      startingCapacity: number;
      currentSelfRating: number;
      sessionCount: number;
      lastSessionDate?: Date;
      capacityGrowth: number;
      milestones: Array<{
        date: Date;
        achievement: string;
        capacityRating: number;
      }>;
    };
  };

  // Pattern tracking
  @Prop({
    type: Object,
    default: {},
  })
  patternProgress: {
    [patternId: string]: {
      startingConfidence: number;
      recognitionInstances: number;
      interruptionSuccesses: number;
      lastRecognitionDate?: Date;
    };
  };

  // Engagement metrics
  @Prop()
  completionRate?: number; // % of scheduled sessions completed

  @Prop()
  averageEngagement?: number;

  @Prop()
  averageInsightQuality?: number;

  // Next steps
  @Prop()
  nextAssessmentRecommended?: Date;

  @Prop()
  recommendedFocus?: string;
}

export const TrainingProgressSchema = SchemaFactory.createForClass(TrainingProgress);
