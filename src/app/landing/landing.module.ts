import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LandingRoutingModule } from './landing-routing.module';
import { ThemeModule } from '../@theme/theme.module';
import { NbMenuModule, NbInputModule, NbCardModule, NbButtonModule, NbActionsModule, NbUserModule, NbCheckboxModule, NbRadioModule, NbDatepickerModule, NbSelectModule, NbIconModule, NbAlertModule, NbSearchModule, NbSpinnerModule } from '@nebular/theme';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { IndexComponent } from './index/index.component';
import { LandingComponent } from './landing.component';
import { LoginComponent } from './login/login.component';
import { RouterModule } from '@angular/router';
import { NbAuthModule } from '@nebular/auth';
import { RegisterComponent } from './register/register.component';
import { ContactoComponent } from './contacto/contacto.component';
import { NosotrosComponent } from './nosotros/nosotros.component';
import { CatalogoComponent } from './catalogo/catalogo.component';
import { CartComponent } from './cart/cart.component';
import { DetalleComponent } from './detalle/detalle.component';
import { SpinnerComponent } from '../@theme/components/spinner/spinner.component';
@NgModule({
  declarations: [
    // CommonModule,
    LandingComponent,
    IndexComponent,
    LoginComponent,
    RegisterComponent,
    ContactoComponent,
    NosotrosComponent,
    CatalogoComponent,
    CartComponent,
    DetalleComponent,
  ],
  imports: [
    CommonModule,
    LandingRoutingModule,
    ThemeModule,
    NbMenuModule,
    NbInputModule,
    NbSpinnerModule,
    NbCardModule,
    NbButtonModule,
    NbActionsModule,
    // NbSearchModule,
    NbUserModule,
    NbCheckboxModule,
    NbRadioModule,
    NbDatepickerModule,
    NbSelectModule,
    NbIconModule,
    ReactiveFormsModule,


    FormsModule,
    RouterModule,
    NbAlertModule,
    NbInputModule,
    NbButtonModule,
    NbCheckboxModule,
    NbAuthModule,
    
  ]
})
export class LandingModule { }
