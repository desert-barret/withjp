import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Academia } from './academia.entity';
import { AcademiaTranslation } from './academia-translation.entity';
import { CreateAcademiaDto } from './dto/create-academia.dto';

@Injectable()
export class AcademiaService {
  constructor(
    @InjectRepository(Academia)
    private repo: Repository<Academia>,
    @InjectRepository(AcademiaTranslation)
    private translationRepo: Repository<AcademiaTranslation>,
  ) {}

  findAll(onlyActive = true): Promise<Academia[]> {
    return this.repo.find({
      where: onlyActive ? { active: true } : {},
      order: { sort_order: 'ASC', createdAt: 'DESC' },
    });
  }

  async findOne(id: number): Promise<Academia> {
    const item = await this.repo.findOne({ where: { id } });
    if (!item) throw new NotFoundException(`Academia #${id} not found`);
    return item;
  }

  async create(dto: CreateAcademiaDto): Promise<Academia> {
    const { translations, ...base } = dto;
    const item = this.repo.create({
      ...base,
      translations: translations.map((t) => this.translationRepo.create(t)),
    });
    return this.repo.save(item);
  }

  async update(id: number, dto: Partial<CreateAcademiaDto>): Promise<Academia> {
    const item = await this.findOne(id);
    const { translations, ...base } = dto;
    Object.assign(item, base);
    if (translations && translations.length > 0) {
      await this.translationRepo.delete({ academia: { id } });
      item.translations = translations.map((t) =>
        this.translationRepo.create({ ...t, academia: item }),
      );
    }
    return this.repo.save(item);
  }

  async remove(id: number): Promise<void> {
    await this.findOne(id);
    await this.repo.delete(id);
  }
}
