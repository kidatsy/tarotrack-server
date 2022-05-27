import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  ManyToOne,
  CreateDateColumn,
  UpdateDateColumn,
} from 'typeorm';
import { CardArchetype } from './cardArchetype.entity';
import { Deck } from '../../decks/entities/deck.entity';

@Entity()
export class Card {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  get arcana (): string {
    return this.archetype.arcana;
  }

  get value (): number {
    return this.archetype.value;
  }

  get suit (): string {
    return this.archetype.suit;
  }

  @Column({ nullable: true })
  valueCustom: string;

  @Column({ nullable: true })
  suitCustom: string;

  // Image

  @ManyToOne(type => CardArchetype)
  archetype: CardArchetype;

  @ManyToOne(type => Deck, deck => deck.cards)
  deck: Deck;

  @CreateDateColumn()
  createdAt: string;

  @UpdateDateColumn()
  updatedAt: string;
}
