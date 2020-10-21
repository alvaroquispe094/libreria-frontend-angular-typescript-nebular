import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../../../environments/environment';
import { Book } from '../../model/book';
import { AuthenticationService } from '../authentication/authentication.service';

@Injectable({
  providedIn: 'root'
})
export class BookService {

  API_URI: string = environment.url;
  headers: HttpHeaders;

  constructor(private http: HttpClient, private authenticationService: AuthenticationService) { 

      
  }

  getBooks():  Observable<any> {
    debugger;
    return this.http.get(`${this.API_URI}/books`, {headers:this.getHeader()});
  }

  getBook(id: string|number) : Observable<any>{
    return this.http.get(`${this.API_URI}/book/${id}`, {headers:this.getHeader()});
  }

  deleteBook(id: string) {
    return this.http.delete(`${this.API_URI}/book/delete/${id}`);
  }
  
  saveBook(book: Book): Observable<any> {
    return this.http.post(`${this.API_URI}/book/add`, book, {headers:this.getHeader()});
  }

  updateBook(id: string|number, updateBook: Book): Observable<any> {
    return this.http.put(`${this.API_URI}/book/update/${id}`, updateBook, {headers:this.getHeader()});
  }

  getHeader(){
    this.headers= new HttpHeaders({'Content-Type': 'application/json',
                                     'Authorization':'Bearer ' +this.authenticationService.leerToken()
                                    });
    return this.headers;
  }
}
