import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type UserDocument = User & Document;

@Schema({ timestamps: true })
export class User {
  @Prop({ required: true, unique: true })
  email: string;

  @Prop({ required: true })
  password: string;

  @Prop({ default: false })
  emailVerified: boolean;

  @Prop()
  emailVerificationToken?: string;

  @Prop()
  emailVerificationExpires?: Date;

  @Prop({ type: Object, default: {} })
  profile: {
    name?: string;
    timezone?: string;
    preferences?: {
      emailNotifications: boolean;
      practiceReminders: boolean;
    };
  };

  @Prop({ type: Object, default: { tier: 'free', status: 'active' } })
  subscription: {
    tier: string; // 'free', 'extended', 'premium', 'professional'
    status: string; // 'active', 'cancelled', 'expired'
    stripeCustomerId?: string;
    stripeSubscriptionId?: string;
    currentPeriodEnd?: Date;
    cancelAtPeriodEnd: boolean;
  };

  @Prop({ type: Object, default: {} })
  assessments: {
    quickProfileCompleted: boolean;
    quickProfileDate?: Date;
    extendedCompleted: boolean;
    extendedDate?: Date;
    extendedPurchased: boolean;
  };

  @Prop({
    type: Object,
    default: { extendedUnlocked: false, journalDaysCount: 0, practiceDaysCount: 0 },
  })
  unlockProgress: {
    extendedUnlocked: boolean;
    journalDaysCount: number; // Number of separate days with journal entries
    practiceDaysCount: number; // Number of separate days with practice logged
    unlockedAt?: Date; // When Extended Assessment was unlocked
  };

  createdAt?: Date;
  updatedAt?: Date;
}

export const UserSchema = SchemaFactory.createForClass(User);
