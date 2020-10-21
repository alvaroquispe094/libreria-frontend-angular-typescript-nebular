import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SeccionLibrosComponent } from './seccion-libros.component';
import { NuevoLibroComponent } from './nuevo-libro/nuevo-libro.component';
import { ConsultaLibroComponent } from './consulta-libro/consulta-libro.component';

const routes: Routes = [
  {
    path: '',
    component: SeccionLibrosComponent,
    children: [
      {
        path: 'consulta',
        component: ConsultaLibroComponent,
      },
      {
        path: 'nuevo',
        component: NuevoLibroComponent,
      },
      {
        path: 'edit/:id',
        component: NuevoLibroComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SeccionLibrosRoutingModule { }

