import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  OneToMany,
  ManyToOne,
  CreateDateColumn,
  UpdateDateColumn,
} from 'typeorm';
import { SpreadPosition } from './spreadPosition.entity';
import { User } from '../../users/entities/user.entity';

@Entity()
export class Spread {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ nullable: true })
  name: string;

  @Column({ type: 'text', nullable: true })
  description: string;

  @OneToMany(type => SpreadPosition, spreadPosition => spreadPosition.spread)
  positions: SpreadPosition[];

  @ManyToOne(type => User, user => user.spreads)
  user: User;

  @CreateDateColumn()
  createdAt: string;

  @UpdateDateColumn()
  updatedAt: string;
}
