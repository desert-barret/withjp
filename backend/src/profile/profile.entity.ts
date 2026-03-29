import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity('profile')
export class Profile {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column({ nullable: true })
  title_es: string;

  @Column({ nullable: true })
  title_en: string;

  @Column({ type: 'text', nullable: true })
  bio_es: string;

  @Column({ type: 'text', nullable: true })
  bio_en: string;

  @Column({ nullable: true })
  avatar_url: string;

  @Column({ nullable: true })
  location_es: string;

  @Column({ nullable: true })
  location_en: string;

  @Column({ nullable: true })
  email: string;

  @Column({ nullable: true })
  linkedin_url: string;

  @Column({ nullable: true })
  github_url: string;

  @Column({ nullable: true })
  youtube_url: string;

  @Column({ nullable: true })
  udemy_url: string;

  @Column({ type: 'json', nullable: true })
  skills: string[];

  @Column({ type: 'json', nullable: true })
  technologies: string[];

  @UpdateDateColumn()
  updatedAt: Date;
}
