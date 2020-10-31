import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../../../environments/environment';
import { UsuarioLogin } from '../../model/UsuarioLogin';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  userToken: string;

  API_URI = environment.url_auth;
  headers: HttpHeaders;

  constructor(private http: HttpClient) {
    // this.leerToken();
    // this.headers= new HttpHeaders({'Content-Type': 'application/json',
    // 'Authorization':'Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJoYWNrcm8iLCJpYXQiOjE1ODU2OTI0ODUsImV4cCI6MTU4NTcyODQ4NX0.Bhx2XwJSQkZ8Q_wageRxcHvty3jbDRlDjg0wvQVR5B9utIORuJAURq8opMdP4Nx8UebDlXojlZbMVTGruda4pQ'});
  }
  

  logout() {
    debugger;
    localStorage.clear();

    const url2: string = this.API_URI + '/logout';
    return this.http.get(url2);

    // debugger;
    // this.userToken = '';
    //  this.router.navigate(['/landing/login'], { relativeTo: this.activatedRoute });
  }

  login(usuarioLogin: UsuarioLogin): Observable<any> {
    // this.spinner.show();
    // debugger;
    const url: string = this.API_URI + '/login';
    debugger;
    return this.http.post(url, usuarioLogin);
    //debugger;
    // .pipe(
      /* map solo se ejecuta si la peticion tiene exito, si quuiero cachear error lo puedo hacer con catchError */
      // map(resp => {
      //   console.log(resp);
      //   this.guardarToken(resp['token']);
      //   /* El map siempre tiene que retornar algo */
      //   return true;
      // })
    
  }

  getOperaciones(role: string|number) : Observable<any>{
    // console.log(this.API_URI+`/api/auth/operaciones/${role}`);
    // console.log("token :"+this.leerToken());
    this.headers= new HttpHeaders({'Content-Type': 'application/json',
    'Authorization':'Bearer ' +this.leerToken()});
    // debugger;
    // debugger;
    return this.http.get(this.API_URI+`/operaciones/${role}`, {headers:this.headers});
  }

  private guardarToken(token: string) {
    this.userToken = token;

    localStorage.setItem('token', token);

    let hoy = new Date();

    hoy.setSeconds(3600);

    localStorage.setItem('expira', hoy.getTime.toString());
  }

  leerToken() {
    if (localStorage.getItem('token')) {
      return localStorage.getItem('token');
    } else {
      return '';
    }
    
    return this.userToken;
  }

  leerRol() {
    // debugger;
    if (localStorage.getItem('role')) {
      return  localStorage.getItem('role');
    } else {
      return '';
    }
    // debugger;
    // return this.userToken;
  }

  leerUsuario() {
    // debugger;
    if (localStorage.getItem('usuario')) {
      return  localStorage.getItem('usuario');
    } else {
      return '';
    }
    // debugger;
    // return this.userToken;
  }

  isLogged(): boolean {
    if (this.userToken.length < 2) {
      return false;
    } else {
      return true;
    }
  }
}
