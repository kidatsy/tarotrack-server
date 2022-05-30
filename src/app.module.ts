import { Module } from '@nestjs/common';
import { APP_GUARD } from '@nestjs/core';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CardsModule } from './cards/cards.module';
import { DecksModule } from './decks/decks.module';
import { ReadingsModule } from './readings/readings.module';
import { SpreadsModule } from './spreads/spreads.module';
import { UsersModule } from './users/users.module';
import { User } from './users/entities/user.entity';
import { AuthModule } from './auth/auth.module';
import { JwtAuthGuard } from './auth/jwtAuth.guard';

@Module({
  imports: [
    TypeOrmModule.forRoot(),
    CardsModule,
    DecksModule,
    ReadingsModule,
    SpreadsModule,
    UsersModule,
    AuthModule,
  ],
  controllers: [AppController],
  providers: [
    AppService,
    {
      provide: APP_GUARD,
      useClass: JwtAuthGuard,
    },
  ],
})
export class AppModule {}
