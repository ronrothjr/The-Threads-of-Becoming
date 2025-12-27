import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Types } from 'mongoose';

export type ModuleProgressDocument = ModuleProgress & Document;

@Schema({ timestamps: true })
export class ModuleProgress {
  @Prop({ type: Types.ObjectId, ref: 'User', required: true })
  userId: Types.ObjectId;

  @Prop({ required: true })
  moduleId: string;

  @Prop({ required: true })
  currentPhase: string;

  @Prop({ required: true, default: 0 })
  phaseItemIndex: number;

  @Prop({ type: [Object], default: [] })
  allResponses: Array<{
    phase: string;
    itemIndex: number;
    response: string;
    selectedAnswer?: number;
    timeSpent: number;
  }>;

  @Prop()
  sessionStartTime?: Date;

  @Prop()
  lastAccessedAt: Date;

  @Prop({ default: false })
  completed: boolean;
}

export const ModuleProgressSchema = SchemaFactory.createForClass(ModuleProgress);

// Create compound index for userId + moduleId
ModuleProgressSchema.index({ userId: 1, moduleId: 1 }, { unique: true });
