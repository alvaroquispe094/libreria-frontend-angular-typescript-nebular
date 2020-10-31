import { Component } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'ngx-landing',
  styleUrls: ['landing.component.scss'],
  template: `
    <landing>
      <router-outlet></router-outlet>
    </landing>
    <ngx-footer-landing></ngx-footer-landing>
  `,
})
export class LandingComponent {

//   menu = MENU_ITEMS;
constructor(private router: Router, private activatedRoute: ActivatedRoute){
  
 }
}