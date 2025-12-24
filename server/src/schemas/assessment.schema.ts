import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Types } from 'mongoose';

export type AssessmentDocument = Assessment & Document;

@Schema({ timestamps: true })
export class Assessment {
  @Prop({ type: Types.ObjectId, ref: 'User', required: true })
  userId: Types.ObjectId;

  @Prop({ required: true, enum: ['quick_profile', 'extended'] })
  type: string;

  @Prop({
    type: [
      {
        questionId: String,
        answer: String,
        answeredAt: Date,
      },
    ],
    default: [],
  })
  responses: Array<{
    questionId: string;
    answer: string;
    answeredAt: Date;
  }>;

  @Prop({ type: Object })
  results: {
    threadScores: {
      presence: {
        score: number;
        percentage: number;
        collapseDirection: string;
      };
      consent: {
        score: number;
        percentage: number;
        collapseDirection: string;
      };
      memory: {
        score: number;
        percentage: number;
        collapseDirection: string;
      };
      pause: {
        score: number;
        percentage: number;
        collapseDirection: string;
      };
      embodiment: {
        score: number;
        percentage: number;
        collapseDirection: string;
      };
      uncertainty: {
        score: number;
        percentage: number;
        collapseDirection: string;
      };
      becoming: {
        score: number;
        percentage: number;
        collapseDirection: string;
      };
    };
    movementAverages: {
      see: number;
      hold: number;
      emerge: number;
    };
    holdPracticeMapping: {
      halt: string[];
      observe: string[];
      look: string[];
      decide: string[];
    };
  };

  @Prop()
  completedAt: Date;

  @Prop({ default: false })
  isComplete: boolean;

  @Prop()
  lastSavedAt: Date;

  @Prop({ type: [String], default: [] })
  questionOrder: string[];
}

export const AssessmentSchema = SchemaFactory.createForClass(Assessment);
