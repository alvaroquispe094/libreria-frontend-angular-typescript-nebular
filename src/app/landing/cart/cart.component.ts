import { Component, OnInit } from '@angular/core';
import { BookDto } from '../../@core/dto/bookDto';
import { Book } from '../../@core/model/book';
import { CartService } from '../../@core/service/cart/cart.service';

@Component({
  selector: 'ngx-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {

  public items: Array<BookDto>
  public totalPrice:number = 0;
  public totalQuantity:number = 0;
  constructor(private _cartService:CartService) { }
  ngOnInit() {
    this._cartService.currentDataCart$.subscribe(x=>{
      if(x)
      {
        this.items = x;
        this.totalQuantity = x.length;
        this.totalPrice = x.reduce((sum, current) => sum + (current.precio * current.cantidad), 0);
      }
    })
  }
  public remove(producto:BookDto)
  {
   this._cartService.removeElementCart(producto);

  }

  public sumar(producto:BookDto)
  {
   this._cartService.add(producto);
   this._cartService.currentDataCart$.subscribe(x=>{
    if(x)
    {
      this.items = x;
      this.totalQuantity = x.length;
      this.totalPrice = x.reduce((sum, current) => sum + (current.precio * current.cantidad), 0);
    }
  })
  }

  public restar(producto:BookDto)
  {
   this._cartService.subtract(producto);
   this._cartService.currentDataCart$.subscribe(x=>{
    if(x)
    {
      this.items = x;
      this.totalQuantity = x.length;
      this.totalPrice = x.reduce((sum, current) => sum + (current.precio * current.cantidad), 0);
    }
  })
  }

  public limpiar()
  {
    debugger;
   this._cartService.clean();
   this._cartService.currentDataCart$.subscribe(x=>{
    if(x)
    {
      this.items = x;
      this.totalQuantity = x.length;
      this.totalPrice = x.reduce((sum, current) => sum + (current.precio * current.cantidad), 0);
    }
  })
  }

}


