import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { IndexComponent } from './index/index.component';
import { LoginComponent } from './login/login.component';
import { LandingComponent } from './landing.component';
import { CatalogoComponent } from './catalogo/catalogo.component';
import { NosotrosComponent } from './nosotros/nosotros.component';
import { ContactoComponent } from './contacto/contacto.component';
import { RegisterComponent } from './register/register.component';
import { CartComponent } from './cart/cart.component';
import { DetalleComponent } from './detalle/detalle.component';

const routes: Routes = [{
  path: '',
  component: LandingComponent,
  children: [
    {
      path: 'index',
      component: IndexComponent,
    },
    {
      path: 'catalogo',
      component: CatalogoComponent,
    },
    {
      path: 'nosotros',
      component: NosotrosComponent,
    },
    {
      path: 'contacto',
      component: ContactoComponent,
    },
    {
      path: 'registro',
      component: RegisterComponent,
    },
    {
      path: 'cart',
      component: CartComponent,
    },
    {
      path: 'detail/:id',
      component: DetalleComponent,
    },
    {
      path: 'login',
      component: LoginComponent,
    },
    {
      path: 'logout',
      component: LoginComponent,
    },
    {
      path: '',
      redirectTo: 'index',
      pathMatch: 'full',
    },
  ],
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LandingRoutingModule { }
