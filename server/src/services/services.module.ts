import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { SpeechifyService } from './speechify.service';
import { S3Service } from './s3.service';

@Module({
  imports: [ConfigModule],
  providers: [SpeechifyService, S3Service],
  exports: [SpeechifyService, S3Service],
})
export class ServicesModule {}
