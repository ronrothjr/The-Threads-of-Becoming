import { Controller, Post, Body } from '@nestjs/common';
import { AuthService } from './auth.service';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @Post('login')
  async login(@Body() loginDto: { email: string; password: string }) {
    // TODO: Validate user credentials against database
    // For now, this is a placeholder structure
    return this.authService.generateToken({
      sub: 'user-id',
      email: loginDto.email,
    });
  }

  @Post('register')
  async register(@Body() registerDto: { email: string; password: string }) {
    // TODO: Create user in database
    const hashedPassword = await this.authService.hashPassword(registerDto.password);
    return { message: 'User registered successfully' };
  }
}
