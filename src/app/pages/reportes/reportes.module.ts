import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ReportesRoutingModule } from './reportes-routing.module';
import { ReporteHistorialComponent } from './reporte-historial/reporte-historial.component';
import { ReportePrestamoComponent } from './reporte-prestamo/reporte-prestamo.component';
import { ReporteVentaComponent } from './reporte-venta/reporte-venta.component';

@NgModule({
  declarations: [ReporteHistorialComponent, ReportePrestamoComponent, ReporteVentaComponent],
  imports: [
    CommonModule,
    ReportesRoutingModule
  ]
})
export class ReportesModule { }
