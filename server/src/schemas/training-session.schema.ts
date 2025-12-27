import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Types } from 'mongoose';

export type TrainingSessionDocument = TrainingSession & Document;

@Schema({ timestamps: true })
export class TrainingSession {
  @Prop({ type: Types.ObjectId, ref: 'User', required: true })
  userId: Types.ObjectId;

  // Session configuration
  @Prop({ required: true })
  sessionNumber: number;

  @Prop({ required: true })
  weekNumber: number;

  // Training content metadata
  @Prop({ required: true, enum: ['single_thread', 'pattern_focused', 'multi_thread', 'answer_specific'] })
  template: string;

  @Prop({ type: [String], required: true })
  threadFocus: string[];

  @Prop()
  patternConnection?: string;

  @Prop({ required: true, min: 1, max: 5 })
  difficultyLevel: number;

  @Prop({ required: true, enum: ['foundation', 'building', 'deepening', 'mastery'] })
  capacityTier: string;

  // User selections
  @Prop({ type: [String] })
  selectedGrowthEdges: string[];

  @Prop({ enum: ['gentle', 'moderate', 'challenging'] })
  intensity: string;

  @Prop()
  duration: number; // minutes

  @Prop({ type: [String] })
  learningStyle: string[];

  // Training content (what to do)
  @Prop()
  title?: string;

  @Prop()
  objective?: string;

  @Prop()
  openingFraming?: string;

  @Prop()
  closingReflection?: string;

  @Prop()
  estimatedDuration?: number;

  @Prop({
    type: [{
      activityId: String,
      type: String,
      content: String,
      prompt: String,
      responseType: String,
      options: [String],
      estimatedTime: Number,
      estimatedMinutes: Number,
      guidance: String,
    }],
    default: [],
  })
  activities: Array<{
    activityId?: string;
    type: string;
    content?: string;
    prompt?: string;
    responseType?: string;
    options?: string[];
    estimatedTime?: number;
    estimatedMinutes?: number;
    guidance?: string;
  }>;

  // Session execution (what happened)
  @Prop()
  startedAt?: Date;

  @Prop()
  completedAt?: Date;

  @Prop()
  timeSpent?: number; // actual minutes

  // Activity responses
  @Prop({
    type: [Object],
    default: [],
  })
  responses: Array<{
    activityIndex: number;
    response: string;
    timeSpent: number;
  }>;

  // Self-assessment
  @Prop()
  preSessionCapacityRating?: number; // 1-10

  @Prop()
  postSessionCapacityRating?: number; // 1-10

  // Progress indicators
  @Prop({ default: 0 })
  completionPercentage: number;

  @Prop()
  engagementScore?: number;

  @Prop()
  insightQuality?: number; // Self-rated or calculated

  // Homework
  @Prop({
    type: {
      assigned: String,
      commitment: String,
      successCriteria: String,
      completedAt: Date,
      outcome: String,
    },
  })
  practiceHomework?: {
    assigned: string;
    commitment?: string;
    successCriteria?: string;
    completedAt?: Date;
    outcome?: string;
  };

  // Next session
  @Prop()
  nextSessionScheduled?: Date;

  @Prop()
  nextSessionFocus?: string;
}

export const TrainingSessionSchema = SchemaFactory.createForClass(TrainingSession);
