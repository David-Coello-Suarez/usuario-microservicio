import { Controller, ParseUUIDPipe } from '@nestjs/common';
import { MessagePattern, Payload } from '@nestjs/microservices';
import { UsuarioService } from './usuario.service';
import { CreateUsuarioDto } from './application/dto/create-usuario.dto';
import { UpdateUsuarioDto } from './application/dto/update-usuario.dto';

@Controller()
export class UsuarioController {
  constructor(private readonly usuarioService: UsuarioService) {}

  @MessagePattern('createUsuario')
  create(@Payload() createUsuarioDto: CreateUsuarioDto) {
    return this.usuarioService.create(createUsuarioDto);
  }

  @MessagePattern('findAllUsuario')
  findAll() {
    return this.usuarioService.findAll();
  }

  @MessagePattern('findOneUsuario')
  findOne(@Payload('id', ParseUUIDPipe) id: string) {
    return this.usuarioService.findOne(id);
  }

  @MessagePattern('updateUsuario')
  update(@Payload() updateUsuarioDto: UpdateUsuarioDto) {
    return this.usuarioService.update(updateUsuarioDto.id, updateUsuarioDto);
  }

  @MessagePattern('removeUsuario')
  remove(@Payload('id', ParseUUIDPipe) id: string) {
    return this.usuarioService.remove(id);
  }
}
