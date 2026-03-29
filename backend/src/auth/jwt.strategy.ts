import { Injectable, UnauthorizedException } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { ExtractJwt, Strategy } from 'passport-jwt';
import { ConfigService } from '@nestjs/config';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { UsersService } from '../users/users.service';
import { Session } from './session.entity';

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor(
    private usersService: UsersService,
    private config: ConfigService,
    @InjectRepository(Session)
    private sessionRepo: Repository<Session>,
  ) {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      ignoreExpiration: false,
      secretOrKey: config.get<string>('JWT_SECRET'),
    });
  }

  async validate(payload: { sub: number; email: string; jti?: string }) {
    const user = await this.usersService.findById(payload.sub);
    if (!user) throw new UnauthorizedException();

    // If token has a jti, verify the session is not revoked
    if (payload.jti) {
      const session = await this.sessionRepo.findOne({
        where: { token_id: payload.jti },
      });
      if (session?.revoked) throw new UnauthorizedException('Session revoked');
      // Update last_used_at asynchronously — don't block the request
      if (session) {
        this.sessionRepo
          .update(session.id, { last_used_at: new Date() })
          .catch(() => {});
      }
    }

    return { id: user.id, email: user.email, role: user.role, jti: payload.jti };
  }
}
