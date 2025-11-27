import { QueryHandler, IQueryHandler } from '@nestjs/cqrs';
import { GetUsuariosQuery } from '../get-usuarios.query';
import { UsuarioRepository } from '../../../domain/usuario.repository';
import { Inject } from '@nestjs/common';

@QueryHandler(GetUsuariosQuery)
export class GetUsuariosHandler implements IQueryHandler<GetUsuariosQuery> {
  constructor(
    @Inject('UsuarioRepository')
    private readonly repo: UsuarioRepository,
  ) {}

  async execute() {
    return this.repo.findAll();
  }
}
