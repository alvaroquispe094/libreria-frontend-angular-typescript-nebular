import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { VentasRoutingModule } from './ventas-routing.module';
import { VentaNuevoComponent } from './venta-nuevo/venta-nuevo.component';
import { VentaConsultaComponent } from './venta-consulta/venta-consulta.component';

@NgModule({
  declarations: [VentaNuevoComponent, VentaConsultaComponent],
  imports: [
    CommonModule,
    VentasRoutingModule
  ]
})
export class VentasModule { }
