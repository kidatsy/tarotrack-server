import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { SpreadsService } from './spreads.service';
import { CreateSpreadDto } from './dto/create-spread.dto';
import { UpdateSpreadDto } from './dto/update-spread.dto';

@Controller('spreads')
export class SpreadsController {
  constructor(private readonly spreadsService: SpreadsService) {}

  @Post()
  create(@Body() createSpreadDto: CreateSpreadDto) {
    return this.spreadsService.create(createSpreadDto);
  }

  @Get()
  findAll() {
    return this.spreadsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.spreadsService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateSpreadDto: UpdateSpreadDto) {
    return this.spreadsService.update(+id, updateSpreadDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.spreadsService.remove(+id);
  }
}
