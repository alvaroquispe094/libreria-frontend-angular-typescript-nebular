import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ConfiguracionRoutingModule } from './configuracion-routing.module';
import { ConfiguracionGeneroComponent } from './configuracion-genero/configuracion-genero.component';

@NgModule({
  declarations: [ConfiguracionGeneroComponent],
  imports: [
    CommonModule,
    ConfiguracionRoutingModule
  ]
})
export class ConfiguracionModule { }
