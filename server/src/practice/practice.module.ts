import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { PracticeController } from './practice.controller';
import { PracticeService } from './practice.service';
import { Practice, PracticeSchema } from '../schemas/practice.schema';
import { User, UserSchema } from '../schemas/user.schema';
import { Journal, JournalSchema } from '../schemas/journal.schema';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: Practice.name, schema: PracticeSchema },
      { name: User.name, schema: UserSchema },
      { name: Journal.name, schema: JournalSchema },
    ]),
  ],
  controllers: [PracticeController],
  providers: [PracticeService],
  exports: [PracticeService],
})
export class PracticeModule {}
