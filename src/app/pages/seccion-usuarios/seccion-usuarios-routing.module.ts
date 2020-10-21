import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SeccionUsuariosComponent } from './seccion-usuarios.component';
import { ConsultaUsuarioComponent } from './consulta-usuario/consulta-usuario.component';
import { CrearUsuarioComponent } from './crear-usuario/crear-usuario.component';

const routes: Routes = [
  {
    path: '',
    component: SeccionUsuariosComponent,
    children: [
      {
        path: 'consulta',
        component: ConsultaUsuarioComponent,
      },
      {
        path: 'nuevo',
        component: CrearUsuarioComponent,
      },
      {
        path: 'edit/:id',
        component: CrearUsuarioComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SeccionUsuariosRoutingModule { }
