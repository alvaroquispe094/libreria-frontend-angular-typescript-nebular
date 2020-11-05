import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { BookDto } from '../../dto/bookDto';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  private cart = new BehaviorSubject<Array<BookDto>>(null); //Definimos nuestro BehaviorSubject, este debe tener un valor inicial siempre

  public currentDataCart$ = this.cart.asObservable(); //Tenemos un observable con el valor actual del BehaviourSubject

  constructor() { }

  public changeCart(newData: BookDto) {
    //Obtenemos el valor actual
    let listCart = this.cart.getValue();
    //Si no es el primer item del carrito
    if(listCart)
    {
      //Buscamos si ya cargamos ese item en el carrito
      let objIndex = listCart.findIndex((obj => obj.id == newData.id));
      //Si ya cargamos uno aumentamos su cantidad
      if(objIndex != -1)
      {
        listCart[objIndex].cantidad += 1;
      }
      //Si es el primer item de ese tipo lo agregamos derecho al carrito
      else {
        // listCart[objIndex].cantidad = 1;
        newData.cantidad = 1;
        listCart.push(newData);
      }  
    }
    //Si es el primer elemento lo inicializamos
    else {
      listCart = [];
      newData.cantidad = 1;
      listCart.push(newData);
      
    }
    debugger;
    this.cart.next(listCart); //Enviamos el valor a todos los Observers que estan escuchando nuestro Observable
  }
  public removeElementCart(newData:BookDto){
    //Obtenemos el valor actual de carrito
    let listCart = this.cart.getValue();
    //Buscamos el item del carrito para eliminar
    let objIndex = listCart.findIndex((obj => obj.id == newData.id));
    if(objIndex != -1)
    {
      //Seteamos la cantidad en 1 (ya que los array se modifican los valores por referencia, si vovlemos a agregarlo la cantidad no se reiniciará)
      listCart[objIndex].cantidad = 1;
      //Eliminamos el item del array del carrito
      listCart.splice(objIndex,1);
    }
    this.cart.next(listCart); //Enviamos el valor a todos los Observers que estan escuchando nuestro Observable
  }

  add(newData:BookDto){
    //Obtenemos el valor actual de carrito
    let listCart = this.cart.getValue();
    //Buscamos el item del carrito para eliminar
    let objIndex = listCart.findIndex((obj => obj.id == newData.id));
    if(objIndex != -1)
    {
      //Seteamos la cantidad en 1 (ya que los array se modifican los valores por referencia, si vovlemos a agregarlo la cantidad no se reiniciará)
      listCart[objIndex].cantidad += 1;
      //Eliminamos el item del array del carrito
      // listCart.splice(objIndex,1);
    }

  }

  subtract(newData:BookDto){
    //Obtenemos el valor actual de carrito
    let listCart = this.cart.getValue();
    //Buscamos el item del carrito para eliminar
    let objIndex = listCart.findIndex((obj => obj.id == newData.id));
    if(objIndex != -1)
    {
      if(listCart[objIndex].cantidad > 1){

        //Seteamos la cantidad en 1 (ya que los array se modifican los valores por referencia, si vovlemos a agregarlo la cantidad no se reiniciará)
        listCart[objIndex].cantidad -= 1;
        //Eliminamos el item del array del carrito
        // listCart.splice(objIndex,1);
      }else{
        this.removeElementCart(newData);
      }
    }

  }

  clean(){
    //Obtenemos el valor actual de carrito
    let listCart = this.cart.getValue();
    debugger;

    listCart = [];
    debugger;

  }

  // restar(id:number){
  //   this.total=0;
  //   this.carrito = new Array<Book>();
  //   var lista = JSON.parse(localStorage.getItem('carrito'));
    
  //   if(lista != null){
  //     for (let i = 0; i <Object.keys(lista).length ; i++) {
  //       if(lista[i].id == id){
  //         lista[i].cantidad = lista[i].cantidad - 1;
  //       }
  //       this.carrito.push (lista[i]);
  //     }
  //   }else{
  //     this.carrito = [];
  //   }
  //   localStorage.setItem('carrito', JSON.stringify(this.carrito));
  //   this.acumularTotal();
  // }

  public obtenerCantidadElementos(){
    let listCart = this.cart.getValue();
    return listCart.length;
  }
}
