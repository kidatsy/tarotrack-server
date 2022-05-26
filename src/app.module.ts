import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CardsModule } from './cards/cards.module';
import { DecksModule } from './decks/decks.module';
import { ReadingsModule } from './readings/readings.module';
import { SpreadsModule } from './spreads/spreads.module';
import { UsersModule } from './users/users.module';

@Module({
  imports: [CardsModule, DecksModule, ReadingsModule, SpreadsModule, UsersModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
