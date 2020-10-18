import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  userToken: string;

  // API_URI = 'https://shopping-library.herokuapp.com';
  API_URI = 'http://localhost:8080/api/admin';
  headers: HttpHeaders;

  constructor(private http: HttpClient) {
    // this.leerToken();
    // this.headers= new HttpHeaders({'Content-Type': 'application/json',
    // 'Authorization':'Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJoYWNrcm8iLCJpYXQiOjE1ODU2OTI0ODUsImV4cCI6MTU4NTcyODQ4NX0.Bhx2XwJSQkZ8Q_wageRxcHvty3jbDRlDjg0wvQVR5B9utIORuJAURq8opMdP4Nx8UebDlXojlZbMVTGruda4pQ'});
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
      debugger;
      return '';
    }
    // debugger;
    // return this.userToken;
  }

 
}
