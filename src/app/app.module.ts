/**
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { CoreModule } from './@core/core.module';
import { ThemeModule } from './@theme/theme.module';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { AuthenticationService as authenticationService } from './@core/service/authentication/authentication.service';
import {
  NbChatModule,
  NbDatepickerModule,
  NbDialogModule,
  NbMenuModule,
  NbSidebarModule,
  NbToastrModule,
  NbWindowModule,
} from '@nebular/theme';
import { IndexComponent } from './landing/index/index.component';
import { CatalogoComponent } from './landing/catalogo/catalogo.component';
import { ContactoComponent } from './landing/contacto/contacto.component';
import { NosotrosComponent } from './landing/nosotros/nosotros.component';
import { LoginComponent } from './landing/login/login.component';
import { RegisterComponent } from './landing/register/register.component';
import { CartComponent } from './landing/cart/cart.component';
import { DetalleComponent } from './landing/detalle/detalle.component';
import { NbRoleProvider, NbSecurityModule } from '@nebular/security';
import { RoleProvider } from './@core/service/authentication/roleProvider';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    RouterModule,
    BrowserAnimationsModule,
    HttpClientModule,
    AppRoutingModule,

    ThemeModule.forRoot(),

    NbSidebarModule.forRoot(),
    NbMenuModule.forRoot(),
    NbDatepickerModule.forRoot(),
    NbDialogModule.forRoot(),
    NbWindowModule.forRoot(),
    NbToastrModule.forRoot(),
    NbChatModule.forRoot({
      messageGoogleMapKey: 'AIzaSyA_wNuCzia92MAmdLRzmqitRGvCF7wCZPY',
    }),
    CoreModule.forRoot(),
    
  ],
  bootstrap: [AppComponent],
  providers: [authenticationService,
    { provide: NbRoleProvider, useClass: RoleProvider },
   
  ],
})
export class AppModule {
}
