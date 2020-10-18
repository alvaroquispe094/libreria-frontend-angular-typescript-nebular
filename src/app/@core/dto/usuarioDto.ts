import { Rol } from '../model/rol';

export class UsuarioDto {
    id: number|string;
    nombre: string;
    apellido: string;
    email: string;
    usuario: string;
    password: string;
    direccion: string;
    fechaNacimiento: string;
    documento:string;
    rol:Rol;
    activo: boolean;
}