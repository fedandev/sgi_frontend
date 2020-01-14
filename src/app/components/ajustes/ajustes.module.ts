import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AjustesComponent } from './ajustes.component';
import { RouterModule } from '@angular/router';
import { AlertModule } from 'ngx-bootstrap/alert';
import { TabsModule } from 'ngx-bootstrap/tabs';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { PanelsModule } from 'src/app/shared/panels/panels.module';
import { UtilsModule } from 'src/app/shared/utils/utils.module';
import { FormAjusteComponent } from './form-ajuste.component';


@NgModule({
  declarations: [AjustesComponent, FormAjusteComponent],
  imports: [
    FormsModule,
    ReactiveFormsModule,
    CommonModule,
    AlertModule,
    PanelsModule,
    UtilsModule,
    TabsModule,
    BsDropdownModule,    
    RouterModule.forChild([
      {path: '', component: AjustesComponent,  data: { breadcrumbs: ['Configuración', 'Ajustes'] }},
      {path: 'form', component: FormAjusteComponent }
    ])
  ]
})
export class AjustesModule { }
