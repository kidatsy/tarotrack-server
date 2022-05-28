import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  ManyToOne,
  CreateDateColumn,
  UpdateDateColumn,
} from 'typeorm';
import { Spread } from './spread.entity';
import { ReadingCardOrientations } from '../../readings/entities/readingCardPosition.entity';

@Entity()
export class SpreadPosition {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ nullable: true })
  name: string;

  @Column({ type: 'text', nullable: true })
  description: string;

  @Column({ type: 'int' })
  order: number;

  @Column({
    type: 'enum',
    enum: ReadingCardOrientations,
    default: null,
    nullable: true,
  })
  defaultOrientation: ReadingCardOrientations;

  @ManyToOne(type => Spread, spread => spread.positions)
  spread: Spread;

  @CreateDateColumn()
  createdAt: string;

  @UpdateDateColumn()
  updatedAt: string;
}
