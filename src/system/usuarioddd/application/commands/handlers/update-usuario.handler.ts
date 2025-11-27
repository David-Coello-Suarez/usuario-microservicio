import { CommandHandler, ICommandHandler } from '@nestjs/cqrs';
import { UpdateUsuarioCommand } from '../update-usuario.command';
import { UsuarioRepository } from '../../../domain/usuario.repository';
import { Inject } from '@nestjs/common';

@CommandHandler(UpdateUsuarioCommand)
export class UpdateUsuarioHandler
  implements ICommandHandler<UpdateUsuarioCommand>
{
  constructor(
    @Inject('UsuarioRepository')
    private readonly repo: UsuarioRepository,
  ) {}

  async execute(cmd: UpdateUsuarioCommand) {
    const usuario = await this.repo.findOne(cmd.id);
    if (!usuario) throw new Error('Usuario no encontrado.');

    usuario.update({
      nombre: cmd.nombre,
      apellidos: cmd.apellidos,
      correo: cmd.correo,
      nombre_usuario: cmd.nombre_usuario,
    });

    await this.repo.update(usuario);
    return usuario;
  }
}
