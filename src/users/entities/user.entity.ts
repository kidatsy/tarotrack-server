import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  OneToMany,
  CreateDateColumn,
  UpdateDateColumn,
} from 'typeorm';
import { Deck } from '../../decks/entities/deck.entity';
import { Spread } from '../../spreads/entities/spread.entity';
import { Reading } from '../../readings/entities/reading.entity';

@Entity()
export class User {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ unique: true })
  email: string;

  @Column({ nullable: true })
  firstName: string;

  @Column({ nullable: true })
  lastName: string;

  @Column({ default: true })
  isActive: boolean;

  @OneToMany(type => Deck, deck => deck.submittedBy)
  decks: Deck[];

  @OneToMany(type => Spread, spread => spread.user)
  spreads: Spread[];

  @OneToMany(type => Reading, reading => reading.reader)
  readings: Reading[];

  @CreateDateColumn()
  createdAt: string;

  @UpdateDateColumn()
  updatedAt: string;
}
