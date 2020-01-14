import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';




@NgModule({
  imports: [
    CommonModule,    
    RouterModule.forChild([
      { path: '', pathMatch: 'full', redirectTo: 'alerts' },
      { path: 'ajustes', loadChildren: () => import('./ajustes/ajustes.module').then(m => m.AjustesModule) },
            
    ]),
  ]
})
export class ComponentsModule { }
