import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  ManyToOne,
  JoinColumn,
  Index,
} from 'typeorm';
import { Post } from './post.entity';

@Entity('post_translations')
@Index(['post', 'locale'], { unique: true })
export class PostTranslation {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => Post, (post) => post.translations, {
    onDelete: 'CASCADE',
    nullable: false,
  })
  @JoinColumn({ name: 'post_id' })
  post: Post;

  @Column({ length: 5 })
  locale: string;

  @Column()
  title: string;

  @Column({ type: 'text' })
  excerpt: string;

  @Column({ type: 'longtext' })
  content: string;
}
