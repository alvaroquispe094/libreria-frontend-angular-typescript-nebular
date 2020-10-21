import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


import { FormsModule as ngFormsModule, ReactiveFormsModule } from '@angular/forms';

import { SeccionLibrosRoutingModule } from './seccion-libros-routing.module';
import { ConsultaLibroComponent } from './consulta-libro/consulta-libro.component';
import { NuevoLibroComponent } from './nuevo-libro/nuevo-libro.component';
import { ConsultaLibroFiltroComponent } from './consulta-libro/consulta-libro-filtro/consulta-libro-filtro.component';
import { ConsultaLibroListaComponent } from './consulta-libro/consulta-libro-lista/consulta-libro-lista.component';
import { NbMenuModule, NbInputModule, NbCardModule, NbButtonModule, NbActionsModule, NbUserModule, NbCheckboxModule, NbRadioModule, NbDatepickerModule, NbSelectModule, NbIconModule } from '@nebular/theme';
import { SeccionLibrosComponent } from './seccion-libros.component';
import { ThemeModule } from '../../@theme/theme.module';
import { Ng2SmartTableModule } from 'ng2-smart-table';

@NgModule({
  declarations: [
    ConsultaLibroComponent, 
    NuevoLibroComponent, 
    ConsultaLibroFiltroComponent, 
    ConsultaLibroListaComponent,
    SeccionLibrosComponent,
  ],
  imports: [
    CommonModule,
    SeccionLibrosRoutingModule,
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
