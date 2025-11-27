import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Usuarioddd } from '../../domain/entities/usuarioddd.entity';
import { UpdateUsuariodddDto } from '../../application/dto/update-usuarioddd.dto';
import { CreateUsuariodddDto } from '../../application/dto/create-usuarioddd.dto';

@Injectable()
export class UsuarioRepository {
  constructor(
    @InjectRepository(Usuarioddd)
    private readonly usuarioRepository: Repository<Usuarioddd>,
  ) {}

  async create(createUsuarioDto: CreateUsuariodddDto) {
    const usuario = this.usuarioRepository.create(createUsuarioDto);
    return await this.usuarioRepository.save(usuario);
  }

  async findAll() {
    return await this.usuarioRepository.find();
  }

  async findOne(id: string) {
    return await this.usuarioRepository.findOneBy({ id });
  }

  async update(id: string, updateUsuarioDto: UpdateUsuariodddDto) {
    const { id: _, ...datauser } = updateUsuarioDto;

    const usuario = await this.usuarioRepository.preload({
      id,
      ...datauser,
    });

    return await this.usuarioRepository.save(usuario);
  }

  async remove(id: string) {
    return await this.usuarioRepository.delete(id);
  }
}
