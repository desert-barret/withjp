import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Post } from './post.entity';
import { PostTranslation } from './post-translation.entity';
import { CreatePostDto } from './dto/create-post.dto';

@Injectable()
export class BlogService {
  constructor(
    @InjectRepository(Post)
    private repo: Repository<Post>,
    @InjectRepository(PostTranslation)
    private translationRepo: Repository<PostTranslation>,
  ) {}

  findAll(onlyPublished = true): Promise<Post[]> {
    return this.repo.find({
      where: onlyPublished ? { published: true } : {},
      order: { published_at: 'DESC', createdAt: 'DESC' },
    });
  }

  findFeatured(): Promise<Post[]> {
    return this.repo.find({
      where: { featured: true, published: true },
      order: { published_at: 'DESC' },
    });
  }

  async findBySlug(slug: string): Promise<Post> {
    const post = await this.repo.findOne({ where: { slug } });
    if (!post) throw new NotFoundException(`Post '${slug}' not found`);
    return post;
  }

  async findOne(id: number): Promise<Post> {
    const post = await this.repo.findOne({ where: { id } });
    if (!post) throw new NotFoundException(`Post #${id} not found`);
    return post;
  }

  async create(dto: CreatePostDto): Promise<Post> {
    const { translations, ...base } = dto;
    const post = this.repo.create({
      ...base,
      translations: translations.map((t) => this.translationRepo.create(t)),
    });
    return this.repo.save(post);
  }

  async update(id: number, dto: Partial<CreatePostDto>): Promise<Post> {
    const post = await this.findOne(id);
    const { translations, ...base } = dto;

    Object.assign(post, base);

    if (translations && translations.length > 0) {
      await this.translationRepo.delete({ post: { id } });
      post.translations = translations.map((t) =>
        this.translationRepo.create({ ...t, post }),
      );
    }

    return this.repo.save(post);
  }

  async remove(id: number): Promise<void> {
    await this.findOne(id);
    await this.repo.delete(id);
  }
}
