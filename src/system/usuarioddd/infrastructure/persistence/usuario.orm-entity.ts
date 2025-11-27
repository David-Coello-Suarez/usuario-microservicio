import { Entity, PrimaryColumn, Column } from 'typeorm';

@Entity('usuarios')
export class UsuarioOrmEntity {
  @PrimaryColumn()
  id: string;

  @Column()
  nombre: string;

  @Column()
  apellidos: string;

  @Column({ unique: true })
  correo: string;

  @Column({ unique: true })
  nombre_usuario: string;
}
