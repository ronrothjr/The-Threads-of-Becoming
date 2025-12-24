import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Types } from 'mongoose';

export type JournalDocument = Journal & Document;

@Schema({ timestamps: true })
export class Journal {
  @Prop({ type: Types.ObjectId, ref: 'User', required: true })
  userId: Types.ObjectId;

  @Prop({ type: String, required: true })
  threadFocus: string; // Which thread this entry focuses on (presence, consent, etc.)

  @Prop({ type: String, required: true })
  content: string; // The journal entry text

  @Prop({ type: String })
  practiceType?: string; // Optional: which HOLD step (halt, observe, look, decide)

  @Prop({ type: Date })
  experiencedAt?: Date; // Optional: when the experience being journaled occurred

  @Prop({ type: [String], default: [] })
  tags?: string[]; // Optional: custom tags for categorization

  createdAt?: Date; // Provided by timestamps
  updatedAt?: Date; // Provided by timestamps
}

export const JournalSchema = SchemaFactory.createForClass(Journal);
