import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Course } from '../courses/course.entity';
import { Post } from '../blog/post.entity';
import { SitemapService } from './sitemap.service';
import { SitemapController } from './sitemap.controller';

@Module({
  imports: [TypeOrmModule.forFeature([Course, Post])],
  providers: [SitemapService],
  controllers: [SitemapController],
})
export class SitemapModule {}
