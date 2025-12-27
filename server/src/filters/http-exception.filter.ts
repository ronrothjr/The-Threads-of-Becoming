import {
  ExceptionFilter,
  Catch,
  ArgumentsHost,
  HttpException,
  HttpStatus,
  Logger,
} from '@nestjs/common';
import { FastifyReply, FastifyRequest } from 'fastify';
import { Error as MongooseError } from 'mongoose';

@Catch()
export class AllExceptionsFilter implements ExceptionFilter {
  private readonly logger = new Logger(AllExceptionsFilter.name);

  catch(exception: unknown, host: ArgumentsHost) {
    const ctx = host.switchToHttp();
    const response = ctx.getResponse<FastifyReply>();
    const request = ctx.getRequest<FastifyRequest>();

    let status = HttpStatus.INTERNAL_SERVER_ERROR;
    let message: string | string[] = 'Internal server error';
    let error = 'Internal Server Error';
    let details: any = undefined;

    // Handle HTTP exceptions
    if (exception instanceof HttpException) {
      status = exception.getStatus();
      const exceptionResponse = exception.getResponse();

      if (typeof exceptionResponse === 'string') {
        message = exceptionResponse;
      } else if (typeof exceptionResponse === 'object') {
        message = (exceptionResponse as any).message || exception.message;
        error = (exceptionResponse as any).error || error;
      }
    }
    // Handle Mongoose validation errors
    else if (exception instanceof MongooseError.ValidationError) {
      status = HttpStatus.BAD_REQUEST;
      error = 'Validation Error';
      message = 'Validation failed';

      // Extract detailed validation errors
      const validationErrors: any = {};
      Object.keys(exception.errors).forEach(key => {
        const err = exception.errors[key];
        validationErrors[key] = err.message;
      });

      details = {
        fields: validationErrors,
        message: exception.message,
      };
    }
    // Handle Mongoose cast errors
    else if (exception instanceof MongooseError.CastError) {
      status = HttpStatus.BAD_REQUEST;
      error = 'Invalid Data';
      message = `Invalid value for ${exception.path}: ${exception.value}`;
    }
    // Handle MongoDB duplicate key errors
    else if ((exception as any).code === 11000) {
      status = HttpStatus.CONFLICT;
      error = 'Duplicate Entry';
      message = 'A record with this value already exists';

      // Extract field name from error
      const match = (exception as any).message?.match(/index: (\w+)_1/);
      if (match) {
        details = { field: match[1] };
        message = `A record with this ${match[1]} already exists`;
      }
    }
    // Handle other errors
    else if (exception instanceof Error) {
      message = exception.message;

      // Don't expose stack traces in production
      if (process.env.NODE_ENV !== 'production') {
        details = {
          stack: exception.stack?.split('\n').slice(0, 5),
        };
      }
    }

    // Log the error with full details
    this.logger.error(
      `${request.method} ${request.url} - ${status} ${error}`,
      exception instanceof Error ? exception.stack : JSON.stringify(exception)
    );

    // Send response (Fastify uses .code() and .send())
    const errorResponse: any = {
      statusCode: status,
      error,
      message,
      timestamp: new Date().toISOString(),
      path: request.url,
    };

    if (details) {
      errorResponse.details = details;
    }

    response.code(status).send(errorResponse);
  }
}
