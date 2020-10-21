import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SeccionUsuariosRoutingModule } from './seccion-usuarios-routing.module';
import { CrearUsuarioComponent } from './crear-usuario/crear-usuario.component';
import { ConsultaUsuarioComponent } from './consulta-usuario/consulta-usuario.component';
import { ConsultaUsuarioFiltroComponent } from './consulta-usuario/consulta-usuario-filtro/consulta-usuario-filtro.component';
import { ConsultaUsuarioListaComponent } from './consulta-usuario/consulta-usuario-lista/consulta-usuario-lista.component';
import { NbMenuModule, NbInputModule, NbCardModule, NbButtonModule, NbActionsModule, NbUserModule, NbCheckboxModule, NbRadioModule, NbDatepickerModule, NbSelectModule, NbIconModule } from '@nebular/theme';
import { ThemeModule } from '../../@theme/theme.module';
import { Ng2SmartTableModule } from 'ng2-smart-table';
import { FormsModule as ngFormsModule, ReactiveFormsModule} from '@angular/forms';
import { SeccionUsuariosComponent } from './seccion-usuarios.component';

@NgModule({
  declarations: [CrearUsuarioComponent, 
    ConsultaUsuarioComponent, 
    ConsultaUsuarioFiltroComponent, 
    ConsultaUsuarioListaComponent,
    SeccionUsuariosComponent,
  ],
  imports: [
    CommonModule,
    SeccionUsuariosRoutingModule,
    NbMenuModule,
    ThemeModule,
    NbInputModule,
    NbCardModule,
    NbButtonModule,
    NbActionsModule,
    NbUserModule,
    NbCheckboxModule,
    NbRadioModule,
    NbDatepickerModule,
    NbSelectModule,
    NbIconModule,
    ngFormsModule,
    ReactiveFormsModule,
    Ng2SmartTableModule,
  ]
})
export class FormsModule { }
