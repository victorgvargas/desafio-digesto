import { ProcessoComponent } from './processo/processo.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProcessosRoutingModule } from './processos-routing.module';
import { ConsultaProcessosComponent } from './consulta-processos/consulta-processos.component';
import { ReactiveFormsModule } from '@angular/forms';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatDividerModule } from '@angular/material/divider';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';

@NgModule({
  declarations: [ConsultaProcessosComponent, ProcessoComponent],
  imports: [
    CommonModule,
    ProcessosRoutingModule,
    ReactiveFormsModule,
    FlexLayoutModule,

    //Material
    MatFormFieldModule,
    MatInputModule,
    MatIconModule,
    MatButtonModule,
    MatToolbarModule,
    MatDividerModule,
    MatTableModule,
    MatPaginatorModule,
    MatProgressSpinnerModule,
  ],
  exports: [
    ProcessoComponent,
  ]
})
export class ProcessosModule { }
