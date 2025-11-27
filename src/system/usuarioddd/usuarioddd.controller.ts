import { Controller } from '@nestjs/common';
import { MessagePattern, Payload } from '@nestjs/microservices';
import { CreateUsuariodddDto } from './application/dto/create-usuarioddd.dto';
import { UpdateUsuariodddDto } from './application/dto/update-usuarioddd.dto';
import { UsuariodddService } from './application/service/usuarioddd.service';

@Controller()
export class UsuariodddController {
  constructor(private readonly usuariodddService: UsuariodddService) {}

  @MessagePattern('createUsuarioddd')
  create(@Payload() createUsuariodddDto: CreateUsuariodddDto) {
    return this.usuariodddService.create(createUsuariodddDto);
  }

  @MessagePattern('findAllUsuarioddd')
  findAll() {
    return this.usuariodddService.findAll();
  }

  @MessagePattern('findOneUsuarioddd')
  findOne(@Payload() id: string) {
    return this.usuariodddService.findOne(id);
  }

  @MessagePattern('updateUsuarioddd')
  update(@Payload() updateUsuariodddDto: UpdateUsuariodddDto) {
    return this.usuariodddService.update(
      updateUsuariodddDto.id,
      updateUsuariodddDto,
    );
  }

  @MessagePattern('removeUsuarioddd')
  remove(@Payload() id: string) {
    return this.usuariodddService.remove(id);
  }
}
