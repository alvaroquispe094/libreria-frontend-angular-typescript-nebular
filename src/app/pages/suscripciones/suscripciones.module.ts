import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SuscripcionesRoutingModule } from './suscripciones-routing.module';
import { SuscripcionNuevoComponent } from './suscripcion-nuevo/suscripcion-nuevo.component';
import { SuscripcionConsultaComponent } from './suscripcion-consulta/suscripcion-consulta.component';

@NgModule({
  declarations: [SuscripcionNuevoComponent, SuscripcionConsultaComponent],
  imports: [
    CommonModule,
    SuscripcionesRoutingModule
  ]
})
export class SuscripcionesModule { }
