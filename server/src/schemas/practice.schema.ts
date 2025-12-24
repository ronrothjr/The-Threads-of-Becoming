import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Types } from 'mongoose';

export type PracticeDocument = Practice & Document;

@Schema({ timestamps: true })
export class Practice {
  @Prop({ type: Types.ObjectId, ref: 'User', required: true })
  userId: Types.ObjectId;

  @Prop({ type: String, required: true })
  threadId: string; // Which thread was practiced (presence, consent, etc.)

  @Prop({ type: String, required: true })
  practiceType: string; // Type of practice (halt, observe, look, decide, or 'interactive-prompt')

  @Prop({ type: String })
  notes?: string; // Optional notes about the practice session

  @Prop({ type: Date, default: Date.now })
  completedAt: Date;

  createdAt?: Date; // Provided by timestamps
  updatedAt?: Date; // Provided by timestamps
}

export const PracticeSchema = SchemaFactory.createForClass(Practice);
