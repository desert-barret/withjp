import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Course } from './course.entity';
import { CourseTranslation } from './course-translation.entity';
import { CoursesService } from './courses.service';
import { CoursesController } from './courses.controller';

@Module({
  imports: [TypeOrmModule.forFeature([Course, CourseTranslation])],
  providers: [CoursesService],
  controllers: [CoursesController],
})
export class CoursesModule {}
