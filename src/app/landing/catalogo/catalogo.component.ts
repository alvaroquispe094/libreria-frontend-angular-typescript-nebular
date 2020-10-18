import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable, Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { BookDto } from '../../@core/dto/bookDto';
import { CartService } from '../../@core/service/cart/cart.service';
import { BookService } from '../../@core/service/libro/libro.service';

@Component({
  selector: 'ngx-catalogo',
  templateUrl: './catalogo.component.html',
  styleUrls: ['./catalogo.component.scss']
})
export class CatalogoComponent implements OnInit {

  private destroy$: Subject<void> = new Subject<void>();

  books: Observable<BookDto[]>

  constructor(private bookService: BookService, private cartService:CartService, private router: Router, private activatedRoute: ActivatedRoute) { }

  ngOnInit() {

    this.getProductos();
  }

  getProductos() {
    this.bookService.getBooks()
    .pipe(takeUntil(this.destroy$))
    .subscribe(res => this.books = res, // add products to list
               err => console.error("error getBooks(): " +err) // muestra el error si falla
               );  
  }

  detail(id:number){
    debugger;
    console.log("Detail Event In Console")
    console.log(id);
    this.router.navigate(['/../landing/detail', id ], { relativeTo: this.activatedRoute });
  }

  public addCart(product:BookDto)
  {
    debugger;
    this.cartService.changeCart(product);
    debugger;
  }

}
