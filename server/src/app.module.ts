import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ConfigModule as NestConfigModule } from '@nestjs/config';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { VideoModule } from './video/video.module';
import { SecretsService } from './config/secrets.service';
import { ConfigModule } from './config/config.module';
import { ContactModule } from './contact/contact.module';
import { AssessmentsModule } from './assessments/assessments.module';
import { JournalModule } from './journal/journal.module';
import { PracticeModule } from './practice/practice.module';
import { LoggingModule } from './logging/logging.module';
import { TrainingModule } from './training/training.module';
import { ServicesModule } from './services/services.module';

@Module({
  imports: [
    // Load environment variables from .env file
    NestConfigModule.forRoot({
      isGlobal: true,
      envFilePath: '.env',
    }),
    ConfigModule,
    MongooseModule.forRootAsync({
      inject: [SecretsService],
      useFactory: async (secretsService: SecretsService) => {
        const secrets = await secretsService.getSecrets();
        return {
          uri: secrets.MONGODB_URI || 'mongodb://127.0.0.1:27017/threads',
        };
      },
    }),
    AuthModule,
    VideoModule,
    ContactModule,
    AssessmentsModule,
    JournalModule,
    PracticeModule,
    LoggingModule,
    TrainingModule,
    ServicesModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
