import { Body, Controller, Get, Put, UseGuards } from '@nestjs/common';
import { ProfileService } from './profile.service';
import { Profile } from './profile.entity';
import { JwtAuthGuard } from '../auth/guards/jwt-auth.guard';

@Controller('profile')
export class ProfileController {
  constructor(private profileService: ProfileService) {}

  @Get()
  get() {
    return this.profileService.get();
  }

  @UseGuards(JwtAuthGuard)
  @Put()
  update(@Body() data: Partial<Profile>) {
    return this.profileService.update(data);
  }
}
