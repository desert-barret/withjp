import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  OneToMany,
  CreateDateColumn,
  UpdateDateColumn,
} from 'typeorm';
import { CourseTranslation } from './course-translation.entity';

@Entity('courses')
export class Course {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ nullable: true })
  image_url: string;

  @Column({ nullable: true })
  demo_url: string;

  @Column({ nullable: true })
  github_url: string;

  @Column({ type: 'json', nullable: true })
  technologies: string[];

  @Column({ nullable: true })
  category: string;

  @Column({ default: false })
  featured: boolean;

  @Column({ default: 0 })
  sort_order: number;

  @Column({ default: true })
  active: boolean;

  @OneToMany(() => CourseTranslation, (t) => t.course, {
    cascade: true,
    eager: true,
  })
  translations: CourseTranslation[];

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;
}
