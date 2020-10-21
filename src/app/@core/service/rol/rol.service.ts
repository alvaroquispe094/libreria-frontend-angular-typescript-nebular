import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../../../environments/environment';
import { AuthenticationService } from '../authentication/authentication.service';

@Injectable({
  providedIn: 'root'
})
export class RolService {

  API_URI: string = environment.url;
  headers: HttpHeaders;

  constructor(private http: HttpClient, private authenticationService: AuthenticationService) { 

      
  }

  getRoles():  Observable<any> {

    return this.http.get(`${this.API_URI}/roles`, {headers:this.getHeader()});
  }

  getHeader(){
    this.headers= new HttpHeaders({'Content-Type': 'application/json',
                                     'Authorization':'Bearer ' +this.authenticationService.leerToken()
                                    });
    return this.headers;
  }
}
