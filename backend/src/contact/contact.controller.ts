import {
  Controller, Get, Post, Patch,
  Body, Param, ParseIntPipe, UseGuards,
} from '@nestjs/common';
import { ContactService } from './contact.service';
import { CreateContactDto } from './dto/create-contact.dto';
import { JwtAuthGuard } from '../auth/guards/jwt-auth.guard';

@Controller('contact')
export class ContactController {
  constructor(private service: ContactService) {}

  @Post()
  create(@Body() dto: CreateContactDto) {
    return this.service.create(dto);
  }

  @UseGuards(JwtAuthGuard)
  @Get()
  findAll() {
    return this.service.findAll();
  }

  @UseGuards(JwtAuthGuard)
  @Patch(':id/read')
  markRead(@Param('id', ParseIntPipe) id: number) {
    return this.service.markRead(id);
  }
}
