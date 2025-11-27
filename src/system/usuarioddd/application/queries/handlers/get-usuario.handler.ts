import { QueryHandler, IQueryHandler } from '@nestjs/cqrs';
import { GetUsuarioQuery } from '../get-usuario.query';
import { UsuarioRepository } from '../../../domain/usuario.repository';
import { Inject } from '@nestjs/common';

@QueryHandler(GetUsuarioQuery)
export class GetUsuarioHandler implements IQueryHandler<GetUsuarioQuery> {
  constructor(
    @Inject('UsuarioRepository')
    private readonly repo: UsuarioRepository,
  ) {}

  async execute(query: GetUsuarioQuery) {
    const usuario = await this.repo.findOne(query.id);

    // if (!usuario)
    //   throw new RpcException({
    //     status: HttpStatus.NOT_FOUND,
    //     message: 'Not found data',
    //   });

    return usuario;
  }
}
