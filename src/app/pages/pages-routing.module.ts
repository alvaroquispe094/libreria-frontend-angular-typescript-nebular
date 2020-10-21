import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';

import { PagesComponent } from './pages.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ResumenComponent } from './resumen/resumen.component';


const routes: Routes = [{
  path: '',
  component: PagesComponent,
  children: [
    {
      path: 'dashboard',
      component: DashboardComponent,
    },
    {
      path: 'resumen',
      component: ResumenComponent,
    },
    {
      path: 'seccion-libros',
      loadChildren: () => import('./seccion-libros/seccion-libros.module')
        .then(m => m.FormsModule),
    },
    {
      path: 'seccion-usuarios',
      loadChildren: () => import('./seccion-usuarios/seccion-usuarios.module')
        .then(m => m.FormsModule),
    },
    {
      path: '',
      redirectTo: 'dashboard',
      pathMatch: 'full',
    },
  ],
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PagesRoutingModule {
}
