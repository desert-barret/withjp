import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Post } from './post.entity';
import { PostTranslation } from './post-translation.entity';
import { BlogService } from './blog.service';
import { BlogController } from './blog.controller';

@Module({
  imports: [TypeOrmModule.forFeature([Post, PostTranslation])],
  providers: [BlogService],
  controllers: [BlogController],
  exports: [BlogService],
})
export class BlogModule {}
