import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { UsuarioRepository } from '../../domain/usuario.repository';
import { Usuario } from '../../domain/usuario.entity';
import { UsuarioOrmEntity } from './usuario.orm-entity';

@Injectable()
export class UsuarioTypeOrmRepository implements UsuarioRepository {
  constructor(
    @InjectRepository(UsuarioOrmEntity)
    private readonly ormRepo: Repository<UsuarioOrmEntity>,
  ) {}

  async create(usuario: Usuario): Promise<void> {
    await this.ormRepo.insert(usuario);
  }

  async update(usuario: Usuario): Promise<void> {
    await this.ormRepo.update(usuario.id, usuario);
  }

  async delete(id: string): Promise<void> {
    await this.ormRepo.delete(id);
  }

  async findAll(): Promise<Usuario[]> {
    const rows = await this.ormRepo.find();
    return rows.map(
      (r) =>
        new Usuario(r.id, r.nombre, r.apellidos, r.correo, r.nombre_usuario),
    );
  }

  async findOne(id: string): Promise<Usuario | null> {
    const r = await this.ormRepo.findOne({ where: { id } });
    if (!r) return null;
    return new Usuario(r.id, r.nombre, r.apellidos, r.correo, r.nombre_usuario);
  }
}
