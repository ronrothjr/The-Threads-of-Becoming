import { Controller, Post, Body } from '@nestjs/common';

@Controller('logging')
export class LoggingController {
  @Post('client')
  logClientEvent(@Body() body: { level: string; message: string; data?: any }) {
    const timestamp = new Date().toISOString();
    const logMessage = `[${timestamp}] [CLIENT-${body.level.toUpperCase()}] ${body.message}`;

    if (body.data) {
      console.log(logMessage, JSON.stringify(body.data, null, 2));
    } else {
      console.log(logMessage);
    }

    return { logged: true };
  }
}
