import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  OneToMany,
  ManyToOne,
  CreateDateColumn,
  UpdateDateColumn,
} from 'typeorm';
import { Reading } from './reading.entity';
import { SpreadPosition } from '../../spreads/entities/spreadPosition.entity';
import { Card } from '../../cards/entities/card.entity';

@Entity()
export class ReadingCardPosition {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ nullable: true })
  name: string;

  @Column({ type: 'text', nullable: true })
  description: string;

  @Column({ type: 'int' })
  order: number;

  @ManyToOne(type => Reading, reading => reading.cardPositions)
  reading: Reading;

  @ManyToOne(type => SpreadPosition)
  spreadPosition: SpreadPosition;

  @ManyToOne(type => Card)
  card: Card;

  @CreateDateColumn()
  createdAt: string;

  @UpdateDateColumn()
  updatedAt: string;
}
