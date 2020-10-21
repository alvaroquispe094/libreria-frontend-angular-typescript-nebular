import { Component, OnInit } from '@angular/core';
import { UserData } from '../../../../@core/data/users';
import { takeUntil } from 'rxjs/operators';
import { Subject, Observable } from 'rxjs';
import { BookService } from '../../../../@core/service/libro/libro.service';
import { LocalDataSource } from 'ng2-smart-table';
import { Router, ActivatedRoute } from '@angular/router';
import { Book } from '../../../../@core/model/book';

@Component({
  selector: 'consulta-libro-lista',
  templateUrl: './consulta-libro-lista.component.html',
  styleUrls: ['./consulta-libro-lista.component.scss']
})
export class ConsultaLibroListaComponent implements OnInit {

  private destroy$: Subject<void> = new Subject<void>();
  books: Observable< Book[]>;
  data = []; //data for ng2 smart Table
  // route: any;
  // books: any[];
  // products: Observable<Product[]>;
  
  constructor(private bookService: BookService,private router: Router, private activatedRoute: ActivatedRoute) {
    // this.router.routeReuseStrategy..shouldReuseRoute = () => false;
   }
  
  ngOnInit() {
    // debugger;
    // this.bookService.getBooks()
    //     .pipe(takeUntil(this.destroy$))
    //     .subscribe((books: any) => this.books = books);
    // // this.source.load(this.books);
    // console.log("ddddddd: "+ this.books.subscribe((books: any) => console.log( books)));
    this.getBooks();

  }
  source: LocalDataSource = new LocalDataSource();
  
  settings = {    
    mode: 'external',
    hideSubHeader: true, // hide filter row
    edit: {
      editButtonContent: "<i class='fas fa-edit'></i>",
      confirmEdit: true,
    },
    delete: {      
      deleteButtonContent: "<i class='fas fa-trash-alt' ></i>",
      confirmDelete: true,
    },
    actions: {
      position: 'right',
      add: false,
      edit: true,
      delete: true,
      
    },   
    columns: {
      
      nombre: {
        title: 'Nombre',
      },
      autor: {
        title: 'Autor',
      },
      editorial: {
        title: 'Editorial',
      },
      genero: {
        title: 'Género',
      },
      pages_number: {
        title: 'Páginas',
      },
      year: {
        title: 'Año',
      },
      precio: {
        title: 'Precio',
      },
      activo: {
        title: 'Activo',
      },
    },
  };
  
  getBooks(){
    this.bookService.getBooks()
    .pipe(takeUntil(this.destroy$))
    .subscribe(res => this.data = res, // add data to table
               err => console.error("error getBooks(): " +err) // muestra el error si falla
               );
  }
  
  onDeleteConfirm(event) {
    console.log("Delete Event In Console")
    console.log(event);
    
  }
  
  updateBook(id){
    console.log("Editing Event In Console")
    console.log(id);
    this.router.navigate([ '/pages/seccion-libros/edit', id ], { relativeTo: this.activatedRoute });
  }
  
  }
  
  
  