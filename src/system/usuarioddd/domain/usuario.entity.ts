export class Usuario {
  constructor(
    public readonly id: string,
    public nombre: string,
    public apellidos: string,
    public correo: string,
    public nombre_usuario: string,
  ) {}

  update(data: {
    nombre: string;
    apellidos: string;
    correo: string;
    nombre_usuario: string;
  }) {
    this.nombre = data.nombre;
    this.apellidos = data.apellidos;
    this.correo = data.correo;
    this.nombre_usuario = data.nombre_usuario;
  }
}
