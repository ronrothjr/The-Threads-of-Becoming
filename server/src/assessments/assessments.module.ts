import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AssessmentsController } from './assessments.controller';
import { AssessmentsService } from './assessments.service';
import { ScoringService } from './scoring.service';
import { ExtendedUnlockService } from './extended-unlock.service';
import { PatternAnalysisService } from './pattern-analysis.service';
import { CollapsePatternService } from './collapse-pattern.service';
import { Assessment, AssessmentSchema } from '../schemas/assessment.schema';
import { User, UserSchema } from '../schemas/user.schema';
import { Journal, JournalSchema } from '../schemas/journal.schema';
import { Practice, PracticeSchema } from '../schemas/practice.schema';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: Assessment.name, schema: AssessmentSchema },
      { name: User.name, schema: UserSchema },
      { name: Journal.name, schema: JournalSchema },
      { name: Practice.name, schema: PracticeSchema },
    ]),
  ],
  controllers: [AssessmentsController],
  providers: [AssessmentsService, ScoringService, ExtendedUnlockService, PatternAnalysisService, CollapsePatternService],
  exports: [AssessmentsService],
})
export class AssessmentsModule {}
