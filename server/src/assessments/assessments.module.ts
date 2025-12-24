import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AssessmentsController } from './assessments.controller';
import { AssessmentsService } from './assessments.service';
import { ScoringService } from './scoring.service';
import { Assessment, AssessmentSchema } from '../schemas/assessment.schema';
import { User, UserSchema } from '../schemas/user.schema';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: Assessment.name, schema: AssessmentSchema },
      { name: User.name, schema: UserSchema },
    ]),
  ],
  controllers: [AssessmentsController],
  providers: [AssessmentsService, ScoringService],
  exports: [AssessmentsService],
})
export class AssessmentsModule {}
