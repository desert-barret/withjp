import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  OneToMany,
  CreateDateColumn,
  UpdateDateColumn,
} from 'typeorm';
import { PostTranslation } from './post-translation.entity';

@Entity('posts')
export class Post {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ unique: true })
  slug: string;

  @Column({ nullable: true })
  featured_image: string;

  @Column({ nullable: true })
  category: string;

  @Column({ type: 'json', nullable: true })
  tags: string[];

  @Column({ default: false })
  featured: boolean;

  @Column({ default: false })
  published: boolean;

  @Column({ type: 'datetime', nullable: true })
  published_at: Date;

  @Column({ nullable: true })
  meta_title: string;

  @Column({ type: 'varchar', length: 500, nullable: true })
  meta_description: string;

  @Column({ nullable: true })
  og_image: string;

  @Column({ default: 0 })
  reading_time: number;

  @OneToMany(() => PostTranslation, (t) => t.post, {
    cascade: true,
    eager: true,
  })
  translations: PostTranslation[];

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;
}
