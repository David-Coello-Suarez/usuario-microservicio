import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CqrsModule } from '@nestjs/cqrs';
import { UsuarioOrmEntity } from './infrastructure/persistence/usuario.orm-entity';
import { UsuariosController } from './usuarioddd.controller';
import { UsuarioTypeOrmRepository } from './infrastructure/persistence/usuario.typeorm.repository';
import { CreateUsuarioHandler } from './application/commands/handlers/create-usuario.handler';
import { UpdateUsuarioHandler } from './application/commands/handlers/update-usuario.handler';
import { DeleteUsuarioHandler } from './application/commands/handlers/delete-usuario.handler';
import { GetUsuarioHandler } from './application/queries/handlers/get-usuario.handler';
import { GetUsuariosHandler } from './application/queries/handlers/get-usuarios.handler';

@Module({
  imports: [CqrsModule, TypeOrmModule.forFeature([UsuarioOrmEntity])],
  controllers: [UsuariosController],
  providers: [
    UsuarioTypeOrmRepository,
    {
      provide: 'UsuarioRepository',
      useExisting: UsuarioTypeOrmRepository,
    },
    CreateUsuarioHandler,
    UpdateUsuarioHandler,
    DeleteUsuarioHandler,
    GetUsuarioHandler,
    GetUsuariosHandler,
  ],
})
export class UsuariodddModule {}
