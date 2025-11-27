export class CreateUsuarioCommand {
  constructor(
    public readonly nombre: string,
    public readonly apellidos: string,
    public readonly correo: string,
    public readonly nombre_usuario: string,
  ) {}
}
