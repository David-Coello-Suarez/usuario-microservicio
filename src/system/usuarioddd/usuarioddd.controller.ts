import { Controller, Body } from '@nestjs/common';
import { MessagePattern, Payload } from '@nestjs/microservices';
import { CommandBus, QueryBus } from '@nestjs/cqrs';
import { GetUsuariosQuery } from './application/queries/get-usuarios.query';
import { GetUsuarioQuery } from './application/queries/get-usuario.query';
import { UpdateUsuarioCommand } from './application/commands/update-usuario.command';
import { CreateUsuarioCommand } from './application/commands/create-usuario.command';
import { DeleteUsuarioCommand } from './application/commands/delete-usuario.command';
import { CreateUsuarioDto, UpdateUsuarioDto } from './dto';

@Controller()
export class UsuariosController {
  constructor(
    private commandBus: CommandBus,
    private queryBus: QueryBus,
  ) {}

  @MessagePattern('createUsuario')
  create(@Body() body: CreateUsuarioDto) {
    return this.commandBus.execute(
      new CreateUsuarioCommand(
        body.nombres,
        body.apellidos,
        body.correo,
        body.nombre_usuario,
      ),
    );
  }

  @MessagePattern('findAllUsuario')
  findAll() {
    console.log('AQ');
    return this.queryBus.execute(new GetUsuariosQuery());
  }

  @MessagePattern('findOneUsuario')
  findOne(@Payload('id') id: string) {
    return this.queryBus.execute(new GetUsuarioQuery(id));
  }

  @MessagePattern('updateUsuario')
  update(@Payload() body: UpdateUsuarioDto) {
    return this.commandBus.execute(
      new UpdateUsuarioCommand(
        body.id,
        body.nombres || '',
        body.apellidos || '',
        body.correo || '',
        body.nombre_usuario || '',
      ),
    );
  }

  @MessagePattern('removeUsuario')
  delete(@Payload('id') id: string) {
    return this.commandBus.execute(new DeleteUsuarioCommand(id));
  }
}
