import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Course } from './course.entity';
import { CourseTranslation } from './course-translation.entity';
import { CreateCourseDto } from './dto/create-course.dto';

@Injectable()
export class CoursesService {
  constructor(
    @InjectRepository(Course)
    private repo: Repository<Course>,
    @InjectRepository(CourseTranslation)
    private translationRepo: Repository<CourseTranslation>,
  ) {}

  findAll(onlyActive = true): Promise<Course[]> {
    return this.repo.find({
      where: onlyActive ? { active: true } : {},
      order: { sort_order: 'ASC', createdAt: 'DESC' },
    });
  }

  findFeatured(): Promise<Course[]> {
    return this.repo.find({
      where: { featured: true, active: true },
      order: { sort_order: 'ASC' },
    });
  }

  async findOne(id: number): Promise<Course> {
    const course = await this.repo.findOne({ where: { id } });
    if (!course) throw new NotFoundException(`Course #${id} not found`);
    return course;
  }

  async create(dto: CreateCourseDto): Promise<Course> {
    const { translations, ...base } = dto;
    const course = this.repo.create({
      ...base,
      translations: translations.map((t) =>
        this.translationRepo.create(t),
      ),
    });
    return this.repo.save(course);
  }

  async update(id: number, dto: Partial<CreateCourseDto>): Promise<Course> {
    const course = await this.findOne(id);
    const { translations, ...base } = dto;

    // Update base fields
    Object.assign(course, base);

    // Replace translations if provided
    if (translations && translations.length > 0) {
      await this.translationRepo.delete({ course: { id } });
      course.translations = translations.map((t) =>
        this.translationRepo.create({ ...t, course }),
      );
    }

    return this.repo.save(course);
  }

  async remove(id: number): Promise<void> {
    await this.findOne(id);
    await this.repo.delete(id);
  }
}
