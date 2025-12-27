import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type TrainingModuleDocument = TrainingModule & Document;

// Audio content with generation metadata
@Schema({ _id: false })
class AudioContent {
  @Prop()
  text: string; // Script/narration text

  @Prop()
  voiceId?: string; // Speechify voice ID (cliff, george, mia, sara)

  @Prop()
  speed?: number; // 0.5 to 2.0

  @Prop()
  model?: string; // simba-english, etc

  @Prop()
  audioUrl?: string; // Generated audio URL

  @Prop()
  duration?: number; // Duration in seconds

  @Prop()
  generatedAt?: Date; // When audio was generated

  @Prop()
  charactersUsed?: number; // For billing tracking
}

// Slide content
@Schema({ _id: false })
class SlideContent {
  @Prop({ required: true })
  slideNumber: number;

  @Prop({ required: true })
  title: string;

  @Prop()
  visualDescription: string; // For generating visual

  @Prop()
  visualUrl?: string; // Uploaded/generated slide image

  @Prop({ type: AudioContent })
  narration: AudioContent;

  @Prop({ type: Object })
  metadata?: any; // Additional slide metadata
}

// Meditation content
@Schema({ _id: false })
class MeditationContent {
  @Prop({ required: true })
  title: string;

  @Prop({ required: true })
  duration: number; // Target duration in minutes

  @Prop({ type: AudioContent })
  audio: AudioContent;

  @Prop({ type: Object })
  scriptSections?: {
    opening?: string;
    deepening?: string;
    closing?: string;
  };
}

// Exercise content
@Schema({ _id: false })
class ExerciseContent {
  @Prop({ required: true })
  title: string;

  @Prop({ required: true })
  type: string; // solo, partner, small_group, etc

  @Prop({ required: true })
  duration: number;

  @Prop()
  instructions?: string;

  @Prop()
  setup?: string;

  @Prop()
  experience?: string;

  @Prop()
  reflection?: string;

  @Prop({ type: [String] })
  steps?: string[];

  @Prop({ type: AudioContent })
  instructionAudio?: AudioContent;
}

// Writing prompt
@Schema({ _id: false })
class WritingPrompt {
  @Prop({ required: true })
  prompt: string;

  @Prop()
  type?: string; // reflection, exploration, application, integration

  @Prop()
  suggestedDuration?: number;

  @Prop()
  guidance?: string;

  @Prop({ default: 'in-session' })
  context?: string; // 'in-session' | 'practice-assignment' | 'weekly-reflection'

  @Prop({ default: false })
  optional?: boolean; // Can user skip this prompt?

  @Prop()
  scheduledAfterDays?: number; // For practice assignments: show N days after module completion
}

// Knowledge check question
@Schema({ _id: false })
class KnowledgeCheck {
  @Prop({ required: true })
  type: string; // thread_identification, collapse_recognition, etc

  @Prop({ required: true })
  question: string;

  @Prop()
  scenario?: string;

  @Prop({ type: [Object] })
  options: Array<{
    text: string;
    isCorrect: boolean;
    feedback: string;
  }>;
}

// Practice assignment
@Schema({ _id: false })
class PracticeAssignment {
  @Prop({ required: true })
  type: string; // micro, mini, real_world

  @Prop({ required: true })
  title: string;

  @Prop({ required: true })
  instructions: string;

  @Prop()
  frequency?: string;

  @Prop()
  duration?: number;

  @Prop({ type: AudioContent })
  audio?: AudioContent;
}

@Schema({ timestamps: true })
export class TrainingModule {
  // Module identity
  @Prop({ required: true, unique: true })
  moduleId: string; // pause-foundation

  @Prop({ required: true })
  thread: string; // PAUSE, CONSENT, etc

  @Prop({ required: true })
  tier: string; // foundation, building, deepening, mastery

  @Prop({ required: true })
  title: string;

  @Prop({ required: true })
  seedQuestion: string;

  // Thread structure
  @Prop({ type: Object })
  tensions?: {
    axis1: { pole1: string; pole2: string };
    axis2: { pole1: string; pole2: string };
  };

  @Prop({ type: [Object] })
  quadrants?: Array<{
    name: string;
    description: string;
    examples?: string[];
  }>;

  @Prop({ type: [Object] })
  collapsePatterns?: Array<{
    name: string;
    direction: string;
    description: string;
    behavioralSigns?: string[];
    protectiveFunction?: string;
  }>;

  // Learning objectives
  @Prop({ type: [String] })
  learningObjectives?: string[];

  @Prop({ type: [Object] })
  milestones?: Array<{
    name: string;
    description: string;
    successCriteria?: string;
  }>;

  // Content
  @Prop({ type: [SlideContent] })
  slides: SlideContent[];

  @Prop({ type: [MeditationContent] })
  meditations: MeditationContent[];

  @Prop({ type: [ExerciseContent] })
  exercises: ExerciseContent[];

  @Prop({ type: [WritingPrompt] })
  writingPrompts: WritingPrompt[];

  @Prop({ type: [KnowledgeCheck] })
  knowledgeChecks: KnowledgeCheck[];

  @Prop({ type: [PracticeAssignment] })
  practiceAssignments: PracticeAssignment[];

  // Session structure
  @Prop()
  estimatedDuration?: number; // Total minutes

  @Prop({ type: Object })
  sessionStructure?: {
    ground?: { duration: number; elements?: string[] };
    teach?: { duration: number; slideSequence?: number[] };
    practice?: { duration: number; exerciseIndex?: number };
    integrate?: { duration: number; promptIndex?: number };
  };

  // Metadata
  @Prop({ default: false })
  published: boolean;

  @Prop()
  version?: string;

  @Prop()
  author?: string;

  @Prop({ type: [String] })
  tags?: string[];
}

export const TrainingModuleSchema = SchemaFactory.createForClass(TrainingModule);

// Indexes (moduleId already has unique: true in @Prop, so no need to index it here)
TrainingModuleSchema.index({ thread: 1, tier: 1 });
TrainingModuleSchema.index({ published: 1 });
