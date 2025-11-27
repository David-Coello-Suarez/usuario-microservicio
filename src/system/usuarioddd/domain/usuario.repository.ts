import { Usuario } from './usuario.entity';

export interface UsuarioRepository {
  create(usuario: Usuario): Promise<void>;
  update(usuario: Usuario): Promise<void>;
  delete(id: string): Promise<void>;
  findOne(id: string): Promise<Usuario | null>;
  findAll(): Promise<Usuario[]>;
}
