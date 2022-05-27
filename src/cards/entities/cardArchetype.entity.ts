import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
} from 'typeorm';

export enum CardArcana {
  MAJOR = 'major',
  MINOR = 'minor',
}

export enum CardSuits {
  CUPS = 'cups',
  WANDS = 'wands',
  SWORDS = 'swords',
  PENTACLES = 'pentacles',
}

export const cardValuesMajor = [
  'The Fool',
  'The Magician',
  'The High Priestess',
  'The Empress',
  'The Emperor',
  'The Hierophant',
  'The Lovers',
  'The Chariot',
  'Strength',
  'The Hermit',
  'Wheel of Fortune',
  'Justice',
  'The Hanged Man',
  'Death',
  'Temperance',
  'The Devil',
  'The Tower',
  'The Star',
  'The Sun',
  'Judgement',
  'The World',
];

export const cardValuesMinor = [
  'Ace',
  'Two',
  'Three',
  'Four',
  'Five',
  'Six',
  'Seven',
  'Eight',
  'Nine',
  'Ten',
  'Page',
  'Knight',
  'Queen',
  'King',
];

@Entity()
export class CardArchetype {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({
    type: 'enum',
    enum: CardArcana,
    default: CardArcana.MINOR,
  })
  arcana: CardArcana;

  @Column({ type: 'int', nullable: true })
  value: number;

  @Column({
    type: 'enum',
    enum: CardSuits,
    default: null,
    nullable: true,
  })
  suit: CardSuits;
}
