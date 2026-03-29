import {
  Entity, PrimaryGeneratedColumn, Column,
  ManyToOne, JoinColumn, CreateDateColumn, Index,
} from 'typeorm';
import { User } from '../users/user.entity';

@Entity('sessions')
export class Session {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => User, { onDelete: 'CASCADE' })
  @JoinColumn({ name: 'user_id' })
  user: User;

  @Column({ name: 'user_id' })
  userId: number;

  @Index()
  @Column({ unique: true })
  token_id: string;

  @Column({ nullable: true, length: 64 })
  ip: string;

  @Column({ nullable: true, length: 500 })
  user_agent: string;

  @Column({ default: false })
  revoked: boolean;

  @CreateDateColumn()
  created_at: Date;

  @Column({ nullable: true, type: 'datetime' })
  last_used_at: Date;
}
