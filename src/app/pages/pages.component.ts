import { Component } from '@angular/core';

import { AuthenticationService } from '../@core/service/authentication/authentication.service';
import { RolOperacion } from '../@core/model/rolOperacion';
import { NbMenuService, NbMenuItem } from '@nebular/theme';
import { Router, ActivatedRoute } from '@angular/router';
import { MenuService, MENU_ITEMS } from './menu.service';

@Component({
  selector: 'ngx-pages',
  styleUrls: ['pages.component.scss'],
  template: `
    <ngx-one-column-layout>
      
      <nb-menu [items]="menu"></nb-menu> 
      
      <router-outlet>
        
      </router-outlet>
    </ngx-one-column-layout>
  `,
})
export class PagesComponent {
  menu:any; //inicializa vacio
  
  constructor(private authenticationService: AuthenticationService, menuService: MenuService , private nbMenuService: NbMenuService,private router: Router, private activatedRoute: ActivatedRoute){

    debugger;
    menuService.agregarItems();
    this.menu = MENU_ITEMS; 
    debugger;
   }
   
  
  
}