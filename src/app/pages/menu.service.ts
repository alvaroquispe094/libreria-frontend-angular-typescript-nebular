import { Injectable } from '@angular/core';
import { RolOperacion } from '../@core/model/rolOperacion';
import { NbMenuItem } from '@nebular/theme';
import { AuthenticationService } from '../@core/service/authentication/authentication.service';

export const MENU_ITEMS: NbMenuItem[] = []; //lista de items del menu

@Injectable({
  providedIn: 'root'
})
export class MenuService {
  // MENU_ITEMS: NbMenuItem[] = [];
  operaciones: RolOperacion;
  childrenItems: NbMenuItem[];
  nbMenuItem : NbMenuItem;
  childrenItem : NbMenuItem;
  role:string;
  totalItems:number;
  constructor(private authenticationService: AuthenticationService) { 
    // this.MENU_ITEMS
    
  }  
  
  cleanItems(){
    debugger;
    this.totalItems = MENU_ITEMS.length
    for (let k = 0; k < this.totalItems ; k++) {
      debugger;
      MENU_ITEMS.pop();
    }
  }

  //obtiene las operaciones del menu segun el rol
  agregarItems(){
    this.role = this.authenticationService.leerRol();
    // this.MENU_ITEMS= [];
    this.cleanItems();
    // debugger;
      this.authenticationService.getOperaciones(this.role)
        .subscribe(
         res => {
            console.log("res: " +res)
               debugger;
               for (let i = 0; i <Object.keys(res).length ; i++) {
                  // debugger;
                  if(Object.keys(res[i].childrens).length != 0){
                    // debugger;
                    
                    this.childrenItems = [];
                    for (let j = 0; j < Object.keys(res[i].childrens).length; j++) {
                      // debugger;
                      this.childrenItem = {
                        'title' :  res[i].childrens[j].operacion.title,                       
                        'link' :  res[i].childrens[j].operacion.link,                    
                       };
                       this.childrenItems.push(this.childrenItem);
                      //  debugger;
                       this.childrenItem = null;
                    }
                    // debugger;
                  }
 
                //  debugger;
                 this.nbMenuItem = {
                  'title' :  res[i].operacion.title,
                  'icon' :  res[i].operacion.icon,
                  'link' :  res[i].operacion.link,
                  'home': res[i].operacion.home,
                  'group': res[i].operacion.group,
                  'children': this.childrenItems,


                 };
                 MENU_ITEMS.push(this.nbMenuItem); //setea las operaciones juntos a sus operaciones hijos
                //  debugger;
                 this.nbMenuItem = null;
                 this.childrenItems =null
               }  
         }
       );
  } 
}
