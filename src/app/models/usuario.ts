import { Rol } from './rol';
export class Usuario {
  id?: number;
  activo: string;
  nombre: string;
  rol: Rol;

  constructor(activo: string, nombre: string, rol:Rol){
      this.activo = activo;
      this.nombre = nombre;
      this.rol = rol;
  }
}
