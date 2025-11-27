import { CommandHandler, ICommandHandler } from '@nestjs/cqrs';
import { CreateUsuarioCommand } from '../create-usuario.command';
import { UsuarioRepository } from '../../../domain/usuario.repository';
import { Usuario } from '../../../domain/usuario.entity';
import { randomUUID } from 'crypto';
import { Inject } from '@nestjs/common';

@CommandHandler(CreateUsuarioCommand)
export class CreateUsuarioHandler
  implements ICommandHandler<CreateUsuarioCommand>
{
  constructor(
    @Inject('UsuarioRepository')
    private readonly repo: UsuarioRepository,
  ) {}

  async execute(cmd: CreateUsuarioCommand) {
    const usuario = new Usuario(
      randomUUID(),
      cmd.nombre,
      cmd.apellidos,
      cmd.correo,
      cmd.nombre_usuario,
    );

    await this.repo.create(usuario);
    return usuario;
  }
}
