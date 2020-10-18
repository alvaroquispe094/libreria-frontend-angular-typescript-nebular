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
        
        <ng-content select="router-outlet"></ng-content>
      </nb-layout-column>

      <nb-layout-footer class="p-0">
        <ngx-footer></ngx-footer>
      </nb-layout-footer>
    </nb-layout>
  `,
  })
export class LandingContentComponent {

 
}
