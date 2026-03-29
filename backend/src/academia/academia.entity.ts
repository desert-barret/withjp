import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  OneToMany,
  CreateDateColumn,
  UpdateDateColumn,
} from 'typeorm';
import { AcademiaTranslation } from './academia-translation.entity';

@Entity('academia')
export class Academia {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ nullable: true })
  subdomain_url: string;

  @Column({ nullable: true })
  image_url: string;

  @Column({ nullable: true })
  badge: string; // e.g. 'NUEVO', 'BETA', 'PRÓXIMAMENTE'

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

  @OneToMany(() => AcademiaTranslation, (t) => t.academia, {
    cascade: true,
    eager: true,
  })
  translations: AcademiaTranslation[];

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;
}
