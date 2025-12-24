import { Injectable, ConflictException, UnauthorizedException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcrypt';
import * as crypto from 'crypto';
import { User, UserDocument } from '../schemas/user.schema';
import { EmailService } from '../email/email.service';

@Injectable()
export class AuthService {
  constructor(
    @InjectModel(User.name) private userModel: Model<UserDocument>,
    private jwtService: JwtService,
    private emailService: EmailService,
  ) {}

  async hashPassword(password: string): Promise<string> {
    return bcrypt.hash(password, 10);
  }

  async comparePasswords(password: string, hash: string): Promise<boolean> {
    return bcrypt.compare(password, hash);
  }

  async generateToken(payload: { sub: string; email: string }) {
    return {
      access_token: this.jwtService.sign(payload),
    };
  }

  async register(email: string, password: string, name?: string) {
    // Check if user already exists
    const existingUser = await this.userModel.findOne({ email });
    if (existingUser) {
      throw new ConflictException('User with this email already exists');
    }

    // Hash password
    const hashedPassword = await this.hashPassword(password);

    // Generate verification token
    const verificationToken = crypto.randomBytes(32).toString('hex');
    const verificationExpires = new Date(Date.now() + 24 * 60 * 60 * 1000); // 24 hours

    // Create user
    const user = new this.userModel({
      email,
      password: hashedPassword,
      emailVerified: false,
      emailVerificationToken: verificationToken,
      emailVerificationExpires: verificationExpires,
      profile: {
        name: name || email.split('@')[0],
        preferences: {
          emailNotifications: true,
          practiceReminders: true,
        },
      },
      subscription: {
        tier: 'free',
        status: 'active',
        cancelAtPeriodEnd: false,
      },
      assessments: {
        quickProfileCompleted: false,
        extendedCompleted: false,
        extendedPurchased: false,
      },
    });

    await user.save();

    // Send verification email
    await this.emailService.sendVerificationEmail(email, verificationToken, name || email.split('@')[0]);

    // Return message (no token until verified)
    return {
      message: 'Registration successful! Please check your email to verify your account.',
      email: user.email,
    };
  }

  async verifyEmail(token: string) {
    const user = await this.userModel.findOne({
      emailVerificationToken: token,
      emailVerificationExpires: { $gt: new Date() },
    });

    if (!user) {
      throw new UnauthorizedException('Invalid or expired verification token');
    }

    user.emailVerified = true;
    user.emailVerificationToken = undefined;
    user.emailVerificationExpires = undefined;
    await user.save();

    // Now generate auth token
    const generatedToken = await this.generateToken({ sub: user._id.toString(), email: user.email });
    return generatedToken;
  }

  async login(email: string, password: string) {
    // Find user
    const user = await this.userModel.findOne({ email });
    if (!user) {
      throw new UnauthorizedException('Invalid credentials');
    }

    // Verify password
    const isPasswordValid = await this.comparePasswords(password, user.password);
    if (!isPasswordValid) {
      throw new UnauthorizedException('Invalid credentials');
    }

    // Check if email is verified
    if (!user.emailVerified) {
      throw new UnauthorizedException('Please verify your email before logging in');
    }

    // Generate token
    return this.generateToken({ sub: user._id.toString(), email: user.email });
  }

  async findById(userId: string): Promise<UserDocument | null> {
    return this.userModel.findById(userId);
  }

  async findByEmail(email: string): Promise<UserDocument | null> {
    return this.userModel.findOne({ email });
  }
}
