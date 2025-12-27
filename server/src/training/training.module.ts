import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { TrainingController } from './training.controller';
import { TrainingService } from './training.service';
import { TrainingAdminController } from './training-admin.controller';
import { TrainingAdminService } from './training-admin.service';
import { PracticeAssignmentController } from './practice-assignment.controller';
import { PracticeAssignmentService } from './practice-assignment.service';
import { TrainingSession, TrainingSessionSchema } from '../schemas/training-session.schema';
import { TrainingProgress, TrainingProgressSchema } from '../schemas/training-progress.schema';
import { ModuleProgress, ModuleProgressSchema } from '../schemas/module-progress.schema';
import { PracticeAssignmentResponse, PracticeAssignmentResponseSchema } from '../schemas/practice-assignment.schema';
import { TrainingModule as TrainingModuleSchema, TrainingModuleSchema as ModuleSchema } from './schemas/training-module.schema';
import { AssessmentsModule } from '../assessments/assessments.module';
import { ServicesModule } from '../services/services.module';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: TrainingSession.name, schema: TrainingSessionSchema },
      { name: TrainingProgress.name, schema: TrainingProgressSchema },
      { name: ModuleProgress.name, schema: ModuleProgressSchema },
      { name: PracticeAssignmentResponse.name, schema: PracticeAssignmentResponseSchema },
      { name: TrainingModuleSchema.name, schema: ModuleSchema },
    ]),
    AssessmentsModule,
    ServicesModule,
  ],
  controllers: [TrainingController, TrainingAdminController, PracticeAssignmentController],
  providers: [TrainingService, TrainingAdminService, PracticeAssignmentService],
  exports: [TrainingService, TrainingAdminService, PracticeAssignmentService],
})
export class TrainingModule {}
