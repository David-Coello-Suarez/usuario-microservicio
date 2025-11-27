import { Injectable } from '@nestjs/common';
import { CreateUsuariodddDto } from '../dto/create-usuarioddd.dto';
import { UpdateUsuariodddDto } from '../dto/update-usuarioddd.dto';

@Injectable()
export class UsuariodddService {
  create(createUsuariodddDto: CreateUsuariodddDto) {
    return 'This action adds a new usuarioddd';
  }

  findAll() {
    return `This action returns all usuarioddd`;
  }

  findOne(id: string) {
    return `This action returns a #${id} usuarioddd`;
  }

  update(id: string, updateUsuariodddDto: UpdateUsuariodddDto) {
    return `This action updates a #${id} usuarioddd`;
  }

  remove(id: string) {
    return `This action removes a #${id} usuarioddd`;
  }
}
