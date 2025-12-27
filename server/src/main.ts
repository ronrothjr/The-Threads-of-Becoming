import { NestFactory } from '@nestjs/core';
import {
  FastifyAdapter,
  NestFastifyApplication,
} from '@nestjs/platform-fastify';
import { ValidationPipe, Logger } from '@nestjs/common';
import { AppModule } from './app.module';
import { AllExceptionsFilter } from './filters/http-exception.filter';

async function bootstrap() {
  const logger = new Logger('Bootstrap');

  const app = await NestFactory.create<NestFastifyApplication>(
    AppModule,
    new FastifyAdapter({ logger: true }),
  );

  // Global exception filter for better error responses
  app.useGlobalFilters(new AllExceptionsFilter());

  // Global validation pipe
  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,
      forbidNonWhitelisted: false,
      transform: true,
      transformOptions: {
        enableImplicitConversion: true,
      },
    }),
  );

  // Configure CORS for cross-origin requests
  const allowedOrigins = process.env.CORS_ORIGINS
    ? process.env.CORS_ORIGINS.split(',')
    : ['http://localhost:5051'];

  logger.log(`CORS enabled for: ${allowedOrigins.join(', ')}`);

  // Enable CORS for React client
  await app.register(require('@fastify/cors'), {
    origin: allowedOrigins,
    credentials: true,
  });

  // Enable multipart/form-data support for file uploads
  await app.register(require('@fastify/multipart'), {
    limits: {
      fileSize: 50 * 1024 * 1024, // 50MB max file size
    },
  });

  // Set global API prefix
  app.setGlobalPrefix('api');

  const port = process.env.PORT ?? 5050;
  await app.listen(port, '0.0.0.0');
  logger.log(`🚀 Server running on http://localhost:${port}`);
}
bootstrap();
