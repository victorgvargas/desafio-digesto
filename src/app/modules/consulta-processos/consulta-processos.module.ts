import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ConsultaProcessosRoutingModule } from './consulta-processos-routing.module';
import { ConsultaProcessosComponent } from './consulta-processos.component';
import { ReactiveFormsModule } from '@angular/forms';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';


@NgModule({
  declarations: [ConsultaProcessosComponent],
  imports: [
    CommonModule,
    ConsultaProcessosRoutingModule,
    ReactiveFormsModule,
    FlexLayoutModule,

    //Material
    MatFormFieldModule,
    MatInputModule,
  ]
})
export class ConsultaProcessosModule { }
