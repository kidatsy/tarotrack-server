import { PartialType } from '@nestjs/mapped-types';
import { CreateSpreadDto } from './create-spread.dto';

export class UpdateSpreadDto extends PartialType(CreateSpreadDto) {}
