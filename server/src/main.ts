import { NestFactory } from '@nestjs/core';
import {
  FastifyAdapter,
  NestFastifyApplication,
} from '@nestjs/platform-fastify';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create<NestFastifyApplication>(
    AppModule,
    new FastifyAdapter(),
  );

  // Configure CORS for cross-origin requests
  const allowedOrigins = process.env.CORS_ORIGINS 
    ? process.env.CORS_ORIGINS.split(',')
    : ['http://localhost:5051'];
  
  // Enable CORS for React client
  await app.register(require('@fastify/cors'), {
    origin: allowedOrigins,
    credentials: true,
  });

  // Set global API prefix
  app.setGlobalPrefix('api');

  const port = process.env.PORT ?? 5050;
  await app.listen(port, '0.0.0.0');
  console.log(`Server running on http://localhost:${port}`);
}
bootstrap();
