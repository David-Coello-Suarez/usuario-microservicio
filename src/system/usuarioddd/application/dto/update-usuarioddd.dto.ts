import { PartialType } from '@nestjs/mapped-types';
import { CreateUsuariodddDto } from './create-usuarioddd.dto';
import { IsNotEmpty, IsUUID } from 'class-validator';

export class UpdateUsuariodddDto extends PartialType(CreateUsuariodddDto) {
  @IsUUID()
  @IsNotEmpty()
  id: string;
}
