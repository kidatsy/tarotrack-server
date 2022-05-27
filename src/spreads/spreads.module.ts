import { Module } from '@nestjs/common';
import { SpreadsService } from './spreads.service';
import { SpreadsController } from './spreads.controller';

@Module({
  controllers: [SpreadsController],
  providers: [SpreadsService],
})
export class SpreadsModule {}
