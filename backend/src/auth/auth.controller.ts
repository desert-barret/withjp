import {
  Body, Controller, Post, Get, Delete,
  Param, UseGuards, Request, Req,
} from '@nestjs/common';
import { Request as ExpressRequest } from 'express';
import { AuthService } from './auth.service';
import { LoginDto } from './dto/login.dto';
import { JwtAuthGuard } from './guards/jwt-auth.guard';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @Post('login')
  login(@Body() dto: LoginDto, @Req() req: ExpressRequest) {
    const forwarded = req.headers['x-forwarded-for'] as string;
    const ip = forwarded?.split(',')[0]?.trim() || req.socket?.remoteAddress || 'unknown';
    const userAgent = (req.headers['user-agent'] as string) || '';
    return this.authService.login(dto, ip, userAgent);
  }

  @UseGuards(JwtAuthGuard)
  @Get('me')
  getProfile(@Request() req) {
    return req.user;
  }

  @UseGuards(JwtAuthGuard)
  @Get('sessions')
  getSessions(@Request() req) {
    return this.authService.getSessions(req.user.id);
  }

  @UseGuards(JwtAuthGuard)
  @Delete('sessions/others')
  revokeOtherSessions(@Request() req) {
    return this.authService.revokeOtherSessions(req.user.jti, req.user.id);
  }

  @UseGuards(JwtAuthGuard)
  @Delete('sessions/:id')
  revokeSession(@Param('id') id: string, @Request() req) {
    return this.authService.revokeSession(+id, req.user.id);
  }
}
