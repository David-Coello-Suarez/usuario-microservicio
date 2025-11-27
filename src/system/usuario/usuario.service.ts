import {
  Injectable,
  InternalServerErrorException,
  NotFoundException,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateUsuarioDto, UpdateUsuarioDto } from './application/dto';
import { Usuario } from './entities/usuario.entity';

@Injectable()
export class UsuarioService {
  constructor(
    @InjectRepository(Usuario)
    private readonly usuarioRepository: Repository<Usuario>,
  ) {}

  async create(createUsuarioDto: CreateUsuarioDto) {
    try {
      const usuario = this.usuarioRepository.create(createUsuarioDto);
      await this.usuarioRepository.save(usuario);
      return { data: usuario };
    } catch (err) {
      console.log(err);
      throw new InternalServerErrorException();
    }
  }

  async findAll() {
    try {
      const data = await this.usuarioRepository.find();

      return { data };
    } catch (err) {
      console.log(err);
      throw new InternalServerErrorException();
    }
  }

  async findOne(id: string) {
    try {
      console.log(id);
      const data = await this.usuarioRepository.findOneBy({ id });

      if (!data) throw new NotFoundException();

      return { data };
    } catch (err) {
      console.log(err);
      throw new InternalServerErrorException();
    }
  }

  async update(id: string, updateUsuarioDto: UpdateUsuarioDto) {
    try {
      const { id: _, ...datauser } = updateUsuarioDto;

      const usuario = await this.usuarioRepository.preload({
        id,
        ...datauser,
      });

      if (!usuario) throw new NotFoundException(`User not found`);

      const data = await this.usuarioRepository.save(usuario);

      return { data };
    } catch (err) {
      console.log(err);
      throw new InternalServerErrorException();
    }
  }

  async remove(id: string) {
    try {
      const data = await this.usuarioRepository.delete(id);

      return { data };
    } catch (err) {
      console.log(err);
      throw new InternalServerErrorException();
    }
  }
}
