import { Module } from '@nestjs/common';
import { UsuariodddController } from './usuarioddd.controller';

@Module({
  controllers: [UsuariodddController],
})
export class UsuariodddModule {}
