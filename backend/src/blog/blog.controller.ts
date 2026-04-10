import {
  Controller, Get, Post as HttpPost, Put, Delete,
  Body, Param, ParseIntPipe, UseGuards, Query,
} from '@nestjs/common';
import { BlogService } from './blog.service';
import { CreatePostDto } from './dto/create-post.dto';
import { JwtAuthGuard } from '../auth/guards/jwt-auth.guard';

@Controller('blog')
export class BlogController {
  constructor(private service: BlogService) {}

  @Get()
  findAll(@Query('all') all?: string) {
    return this.service.findAll(all !== 'true');
  }

  @Get('featured')
  findFeatured() {
    return this.service.findFeatured();
  }

  @Get('slug/:slug')
  findBySlug(@Param('slug') slug: string) {
    return this.service.findBySlug(slug);
  }

  @Get(':id')
  findOne(@Param('id', ParseIntPipe) id: number) {
    return this.service.findOne(id);
  }

  @UseGuards(JwtAuthGuard)
  @HttpPost()
  create(@Body() dto: CreatePostDto) {
    return this.service.create(dto);
  }

  @UseGuards(JwtAuthGuard)
  @Put(':id')
  update(@Param('id', ParseIntPipe) id: number, @Body() dto: Partial<CreatePostDto>) {
    return this.service.update(id, dto);
  }

  @UseGuards(JwtAuthGuard)
  @Delete(':id')
  remove(@Param('id', ParseIntPipe) id: number) {
    return this.service.remove(id);
  }
}
