import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { Book } from '../../@core/model/book';
import { BookService } from '../../@core/service/libro/libro.service';

@Component({
  selector: 'ngx-detalle',
  templateUrl: './detalle.component.html',
  styleUrls: ['./detalle.component.scss']
})
export class DetalleComponent implements OnInit {

  private destroy$: Subject<void> = new Subject<void>();
  book: Book = {
    id: '',
    nombre: '',
    autor: '',
    editorial: '',
    genero: '',
    pages_number: '',
    year: '',
    precio: '',
    descripcion: '',
    activo: true
  };
  edit: boolean;

  constructor(private bookService: BookService,/* private mensajeService: MensajeService,*/ private router: Router, private activatedRoute: ActivatedRoute) { 
    debugger;
    this.edit = false;
  }

  ngOnInit() {
    debugger;
    const params = this.activatedRoute.snapshot.params;
     if (params.id) {
       // this.edit = true; 
       this.bookService.getBook(params.id)
        .pipe(takeUntil(this.destroy$))
        .subscribe(
         res => {
           this.book = res; //setea el libro
           debugger;
        },
       
         err =>  {
          
           debugger; 
           console.error("error getBooks(): " +err.error.message)
          //  this.mensajeService.error(err.error.message, "danger");
           // this.data.message = err.error.message;
           // this.data.type = 'danger';
           debugger;
           // console.error("error getBooks(): " +err)
           }  
       );
      
     }
  }
}
