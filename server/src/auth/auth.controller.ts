import { Controller, Post, Get, Body, Query, HttpException, HttpStatus, UseGuards, Request } from '@nestjs/common';
import { AuthService } from './auth.service';
import { JwtAuthGuard } from './jwt-auth.guard';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @Post('register')
  async register(@Body() registerDto: { email: string; password: string; name?: string }) {
    try {
      if (!registerDto.email || !registerDto.password) {
        throw new HttpException('Email and password are required', HttpStatus.BAD_REQUEST);
      }

      if (registerDto.password.length < 8) {
        throw new HttpException('Password must be at least 8 characters', HttpStatus.BAD_REQUEST);
      }

      const result = await this.authService.register(
        registerDto.email,
        registerDto.password,
        registerDto.name,
      );

      return result;
    } catch (error) {
      if (error.status) {
        throw error;
      }
      throw new HttpException(
        error.message || 'Registration failed',
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  }

  @Post('login')
  async login(@Body() loginDto: { email: string; password: string }) {
    try {
      if (!loginDto.email || !loginDto.password) {
        throw new HttpException('Email and password are required', HttpStatus.BAD_REQUEST);
      }

      return await this.authService.login(loginDto.email, loginDto.password);
    } catch (error) {
      if (error.status) {
        throw error;
      }
      throw new HttpException(
        'Login failed',
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  }

  @Get('verify-email')
  async verifyEmail(@Query('token') token: string) {
    try {
      if (!token) {
        throw new HttpException('Verification token is required', HttpStatus.BAD_REQUEST);
      }

      const result = await this.authService.verifyEmail(token);
      return {
        message: 'Email verified successfully! You can now log in.',
        ...result,
      };
    } catch (error) {
      if (error.status) {
        throw error;
      }
      throw new HttpException(
        error.message || 'Email verification failed',
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  }

  @UseGuards(JwtAuthGuard)
  @Get('me')
  async getMe(@Request() req) {
    return this.authService.findById(req.user.userId);
  }
}
