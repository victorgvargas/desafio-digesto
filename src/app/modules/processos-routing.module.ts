import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ConsultaProcessosComponent } from './consulta-processos/consulta-processos.component';

const routes: Routes = [{ path: '', component: ConsultaProcessosComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProcessosRoutingModule { }
