import { Component, OnInit, Input } from '@angular/core';
import { takeUntil } from 'rxjs/operators';
import { BookService } from '../../../@core/service/libro/libro.service';
import { Subject, Observable } from 'rxjs';
import { Book } from '../../../@core/model/book';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { MensajeService } from '../../../@theme/components/message/mensaje.service';

@Component({
  selector: 'nuevo-libro',
  templateUrl: './nuevo-libro.component.html',
  styleUrls: ['./nuevo-libro.component.scss']
})
export class NuevoLibroComponent implements OnInit {
  
  @Input('mensaje') data;

  private destroy$: Subject<void> = new Subject<void>();
  
  public bookForm: FormGroup;  // Define FormGroup to student's form

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
  
  constructor(public fb: FormBuilder,private mensajeService: MensajeService,private bookService: BookService, private router: Router, private activatedRoute: ActivatedRoute) { 
    this.edit = false; //por defecto falso
  }

  ngOnInit() {
    // debugger;
    // this.mensajeService.hideMessage();
    const params = this.activatedRoute.snapshot.params;
    if (params.id) {
      this.edit = true; 
      this.bookService.getBook(params.id)
       .pipe(takeUntil(this.destroy$))
       .subscribe(
        res => {
          this.book = res; //setea los libros
          debugger;
       },
       
        err =>  {
          
          debugger; 
          console.error("error getBooks(): " +err.error.message)
          this.mensajeService.error(err.error.message, "danger");
          // this.data.message = err.error.message;
          // this.data.type = 'danger';
          debugger;
          // console.error("error getBooks(): " +err)
          }  
      );
      
    }

    this.bookForm = this.fb.group({
      nombre: ['', [Validators.required, Validators.minLength(2)]],
      autor: ['', [Validators.required, Validators.minLength(2)]],
      editorial: ['', [Validators.required, Validators.minLength(2)]],
      genero: ['', [Validators.required, Validators.minLength(2)]],
      pages_number: ['', [Validators.required, Validators.minLength(2)]],
      year: ['', [Validators.required, Validators.minLength(2)]],
      precio: ['', [Validators.required, Validators.minLength(2)]],
      descripcion: ['', [Validators.required, Validators.minLength(2)]],
      activo: ['']
    })  
  // debugger;
  this.mensajeService.hideMessage();
  }

  saveBook() {
    console.log(this.book);
    debugger;
    this.bookService.saveBook(this.book)
      .subscribe(
        res => {
          console.log(res);
          debugger;
          this.mensajeService.success(res.mensaje, "success");
          this.router.navigate(['/pages/seccion-libros/consulta'], { relativeTo: this.activatedRoute });
        },
        err => console.error(err)
      )


  }
  
   updateBook() {
     this.bookService.updateBook(this.book.id, this.book)
       .subscribe(
         res => { 
           console.log(res);
           debugger;
           this.mensajeService.success(res.mensaje, "success");
          //  this.mensajeService.hideMessage()
           this.router.navigate(['/pages/seccion-libros/consulta'], { relativeTo: this.activatedRoute });
         },
         err => {         
          debugger; 
          console.error("error getBooks(): " +err.error.message)
          this.mensajeService.error(err.error.message, "danger");
          }  
       )
   }

  // Accessing form control using getters
  get nombre() {
    return this.bookForm.get('nombre');
  }

  get autor() {
   return this.bookForm.get('autor');
 }

 get editorial() {
   return this.bookForm.get('editorial');
 }

 get genero() {
   return this.bookForm.get('genero');
 }

 get pages_number() {
   return this.bookForm.get('pages_number');
 }

 get year() {
   return this.bookForm.get('year');
 }

 get precio() {
   return this.bookForm.get('precio');
 }

 get descripcion() {
  return this.bookForm.get('descripcion');
}

 get activo() {
   return this.bookForm.get('activo');
 }

 // Reset student form's values
 resetForm() {
   this.bookForm.reset();
 }   

}
