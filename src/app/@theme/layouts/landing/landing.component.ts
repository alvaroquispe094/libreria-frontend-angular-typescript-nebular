import { Component} from '@angular/core';

@Component({
  selector: 'landing',
  styleUrls: ['./landing.component.scss'],
  template: `
    <nb-layout windowMode>
      <nb-layout-header fixed>
        <ngx-header></ngx-header>
      </nb-layout-header>
    
      <nb-layout-column class="p-0">
        <message></message>
        <ng-content select="router-outlet"></ng-content>
        <ngx-footer-landing></ngx-footer-landing>
      </nb-layout-column>

      
      
    </nb-layout>
  `,
  })
export class LandingContentComponent {

 
}
