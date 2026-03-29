import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  ManyToOne,
  JoinColumn,
  Index,
} from 'typeorm';
import { Academia } from './academia.entity';

@Entity('academia_translations')
@Index(['academia', 'locale'], { unique: true })
export class AcademiaTranslation {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => Academia, (a) => a.translations, {
    onDelete: 'CASCADE',
    nullable: false,
  })
  @JoinColumn({ name: 'academia_id' })
  academia: Academia;

  @Column({ length: 5 })
  locale: string;

  @Column()
  title: string;

  @Column({ type: 'text' })
  description: string;

  @Column({ type: 'varchar', length: 500, nullable: true })
  short_description: string;
}
