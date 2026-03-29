import { Injectable, NotFoundException, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { randomUUID } from 'crypto';
import { UsersService } from '../users/users.service';
import { LoginDto } from './dto/login.dto';
import { Session } from './session.entity';

@Injectable()
export class AuthService {
  constructor(
    private usersService: UsersService,
    private jwtService: JwtService,
    @InjectRepository(Session)
    private sessionRepo: Repository<Session>,
  ) {}

  async login(dto: LoginDto, ip: string, userAgent: string) {
    const user = await this.usersService.findByEmail(dto.email);
    if (!user) throw new UnauthorizedException('Invalid credentials');

    const valid = await this.usersService.validatePassword(dto.password, user.password);
    if (!valid) throw new UnauthorizedException('Invalid credentials');

    const tokenId = randomUUID();
    const payload = { sub: user.id, email: user.email, role: user.role, jti: tokenId };

    // Non-blocking — login must never fail due to session tracking
    try {
      const session = this.sessionRepo.create({
        userId: user.id,
        token_id: tokenId,
        ip,
        user_agent: userAgent,
        last_used_at: new Date(),
      });
      await this.sessionRepo.save(session);
    } catch (err: any) {
      console.warn('[Auth] Session tracking unavailable:', err?.message);
    }

    return {
      access_token: this.jwtService.sign(payload),
      user: { id: user.id, email: user.email, role: user.role },
    };
  }

  async getSessions(userId: number) {
    return this.sessionRepo.find({
      where: { userId, revoked: false },
      order: { last_used_at: 'DESC' },
      take: 20,
    });
  }

  async revokeSession(sessionId: number, userId: number) {
    const session = await this.sessionRepo.findOne({
      where: { id: sessionId, userId },
    });
    if (!session) throw new NotFoundException('Session not found');
    await this.sessionRepo.update(session.id, { revoked: true });
    return { success: true };
  }

  async revokeOtherSessions(currentJti: string | undefined, userId: number) {
    const qb = this.sessionRepo
      .createQueryBuilder()
      .update(Session)
      .set({ revoked: true })
      .where('user_id = :userId AND revoked = false', { userId });

    if (currentJti) {
      qb.andWhere('token_id != :jti', { jti: currentJti });
    }

    await qb.execute();
    return { success: true };
  }
}
