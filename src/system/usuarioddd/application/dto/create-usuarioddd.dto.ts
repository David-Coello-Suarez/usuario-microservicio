import { IsEmail, IsNotEmpty, IsString } from 'class-validator';

export class CreateUsuariodddDto {
  @IsString()
  @IsNotEmpty()
  nombres: string;

  @IsString()
  @IsNotEmpty()
  apellidos: string;

  @IsEmail()
  @IsNotEmpty()
  correo: string;

  @IsString()
  @IsNotEmpty()
  nombre_usuario: string;
}
