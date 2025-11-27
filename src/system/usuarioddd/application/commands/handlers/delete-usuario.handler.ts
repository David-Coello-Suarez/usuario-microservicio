import { CommandHandler, ICommandHandler } from '@nestjs/cqrs';
import { DeleteUsuarioCommand } from '../delete-usuario.command';
import { UsuarioRepository } from '../../../domain/usuario.repository';
import { Inject } from '@nestjs/common';

@CommandHandler(DeleteUsuarioCommand)
export class DeleteUsuarioHandler
  implements ICommandHandler<DeleteUsuarioCommand>
{
  constructor(
    @Inject('UsuarioRepository')
    private readonly repo: UsuarioRepository,
  ) {}

  async execute(cmd: DeleteUsuarioCommand) {
    await this.repo.delete(cmd.id);
    return { deleted: true };
  }
}
