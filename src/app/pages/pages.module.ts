import { NgModule } from '@angular/core';
import { NbMenuModule, NbInputModule, NbCardModule, NbButtonModule, NbActionsModule, NbUserModule, NbCheckboxModule, NbRadioModule, NbDatepickerModule, NbSelectModule, NbIconModule, NbAlertModule } from '@nebular/theme';

import { ThemeModule } from '../@theme/theme.module';
import { PagesComponent } from './pages.component';
import { DashboardModule } from './dashboard/dashboard.module';
import { PagesRoutingModule } from './pages-routing.module';
import { Ng2SmartTableModule } from 'ng2-smart-table';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { ResumenComponent } from './resumen/resumen.component';
import { PerfilComponent } from './perfil/perfil.component';
import { EstadisticasComponent } from './estadisticas/estadisticas.component';
import { MessageComponent } from '../@theme/components/message/message.component';

@NgModule({
  imports: [
    PagesRoutingModule,
    ThemeModule,
    DashboardModule,
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
    Ng2SmartTableModule,
    FormsModule,
    ReactiveFormsModule,
    NbAlertModule,
  ],
  declarations: [
    PagesComponent,
    ResumenComponent,
    PerfilComponent,
    EstadisticasComponent,
    // MessageComponent,//subir un nivel arriba message component
    // LandingComponent,
    // LoginComponent,

    
  ],
})
export class PagesModule {
}
