import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsuariodddModule } from './system/usuarioddd/usuarioddd.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      database: 'test',
      password: 'root123',
      username: 'root',
      autoLoadEntities: true,
      synchronize: true,
    }),
    UsuariodddModule,
  ],
})
export class AppModule {}
