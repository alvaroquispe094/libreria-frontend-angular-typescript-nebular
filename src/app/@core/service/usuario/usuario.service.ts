import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../../../environments/environment';
import { UsuarioDto } from '../../dto/usuarioDto';
import { Usuario } from '../../model/usuario';
import { AuthenticationService } from '../authentication/authentication.service';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  API_URI: string = environment.url;
  headers: HttpHeaders;

  constructor(private http: HttpClient, private authenticationService: AuthenticationService) { 

      
  }

  getUsuarios():  Observable<any> {

    return this.http.get(`${this.API_URI}/usuarios`, {headers:this.getHeader()});
  }

  getUsuario(id: string|number) : Observable<any>{
    return this.http.get(`${this.API_URI}/usuario/${id}`, {headers:this.getHeader()});
  }

  deleteUsuario(id: string) {
    return this.http.delete(`${this.API_URI}/usuario/delete/${id}`);
  }

  saveUsuario(usuario: Usuario) {
    const url: string = this.API_URI+'/usuario/add/';
    debugger;
    return this.http.post(url, usuario, {headers:this.getHeader()});
  }

  registrarUsuario(usuario: Usuario): Observable<any> {
    const url: string = 'https://shopping-library.herokuapp.com/api/auth/registrar';
    debugger;
    return this.http.post(url, usuario);
  }

  updateUsuario(id: string|number, updateUsuario: UsuarioDto): Observable<any> {
    return this.http.put(`${this.API_URI}/usuario/update/${id}`, updateUsuario, {headers:this.getHeader()});
  }

  getHeader(){
    this.headers= new HttpHeaders({'Content-Type': 'application/json',
                                     'Authorization':'Bearer ' +this.authenticationService.leerToken()
                                    });
    return this.headers;
  }
}
