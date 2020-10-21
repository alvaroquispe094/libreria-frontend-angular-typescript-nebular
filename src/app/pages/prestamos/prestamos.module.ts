import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PrestamosRoutingModule } from './prestamos-routing.module';
import { PrestamoNuevoComponent } from './prestamo-nuevo/prestamo-nuevo.component';
import { PrestamoConsultaComponent } from './prestamo-consulta/prestamo-consulta.component';

@NgModule({
  declarations: [PrestamoNuevoComponent, PrestamoConsultaComponent],
  imports: [
    CommonModule,
    PrestamosRoutingModule
  ]
})
export class PrestamosModule { }
