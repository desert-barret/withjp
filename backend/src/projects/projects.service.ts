import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Project } from './project.entity';
import { ProjectTranslation } from './project-translation.entity';
import { CreateProjectDto } from './dto/create-project.dto';

@Injectable()
export class ProjectsService {
  constructor(
    @InjectRepository(Project)
    private repo: Repository<Project>,
    @InjectRepository(ProjectTranslation)
    private translationRepo: Repository<ProjectTranslation>,
  ) {}

  findAll(onlyActive = true): Promise<Project[]> {
    return this.repo.find({
      where: onlyActive ? { active: true } : {},
      order: { sort_order: 'ASC', createdAt: 'DESC' },
    });
  }

  findFeatured(): Promise<Project[]> {
    return this.repo.find({
      where: { featured: true, active: true },
      order: { sort_order: 'ASC' },
    });
  }

  async findOne(id: number): Promise<Project> {
    const project = await this.repo.findOne({ where: { id } });
    if (!project) throw new NotFoundException(`Project #${id} not found`);
    return project;
  }

  async create(dto: CreateProjectDto): Promise<Project> {
    const { translations, ...base } = dto;
    const project = this.repo.create({
      ...base,
      translations: translations.map((t) =>
        this.translationRepo.create(t),
      ),
    });
    return this.repo.save(project);
  }

  async update(id: number, dto: Partial<CreateProjectDto>): Promise<Project> {
    const project = await this.findOne(id);
    const { translations, ...base } = dto;

    // Update base fields
    Object.assign(project, base);

    // Replace translations if provided
    if (translations && translations.length > 0) {
      await this.translationRepo.delete({ project: { id } });
      project.translations = translations.map((t) =>
        this.translationRepo.create({ ...t, project }),
      );
    }

    return this.repo.save(project);
  }

  async remove(id: number): Promise<void> {
    await this.findOne(id);
    await this.repo.delete(id);
  }
}
