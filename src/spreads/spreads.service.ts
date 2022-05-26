import { Injectable } from '@nestjs/common';
import { CreateSpreadDto } from './dto/create-spread.dto';
import { UpdateSpreadDto } from './dto/update-spread.dto';

@Injectable()
export class SpreadsService {
  create(createSpreadDto: CreateSpreadDto) {
    return 'This action adds a new spread';
  }

  findAll() {
    return `This action returns all spreads`;
  }

  findOne(id: number) {
    return `This action returns a #${id} spread`;
  }

  update(id: number, updateSpreadDto: UpdateSpreadDto) {
    return `This action updates a #${id} spread`;
  }

  remove(id: number) {
    return `This action removes a #${id} spread`;
  }
}
