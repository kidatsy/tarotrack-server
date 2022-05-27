import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  OneToMany,
  ManyToOne,
  CreateDateColumn,
  UpdateDateColumn,
} from 'typeorm';
import { ReadingCardPosition } from './readingCardPosition.entity';
import { Deck } from '../../decks/entities/deck.entity';
import { Spread } from '../../spreads/entities/spread.entity';
import { User } from '../../users/entities/user.entity';

@Entity()
export class Reading {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ nullable: true })
  name: string;

  @Column({ type: 'text', nullable: true })
  description: string;

  @OneToMany(type => ReadingCardPosition, readingCardPosition => readingCardPosition.reading)
  cardPositions: ReadingCardPosition[];

  @ManyToOne(type => Spread)
  spread: Spread;

  @ManyToOne(type => Deck)
  deck: Deck;

  @ManyToOne(type => User, user => user.readings)
  reader: User;

  @CreateDateColumn()
  createdAt: string;

  @UpdateDateColumn()
  updatedAt: string;
}
