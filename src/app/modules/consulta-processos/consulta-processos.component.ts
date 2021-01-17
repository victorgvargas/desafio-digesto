import { ProcessoService } from './../../shared/services/processo/processo.service';
import { tap } from 'rxjs/operators';
import { DataService } from './../../shared/services/data-service/data.service';
import { Component } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { CNJ } from '../../shared/models/cnj.model'
@Component({
  selector: 'app-consulta-processos',
  templateUrl: './consulta-processos.component.html',
  styleUrls: ['./consulta-processos.component.scss'],
})
export class ConsultaProcessosComponent {
  pattern = '^[0-9]{7}-[0-9]{2}.[0-9]{4}.[0-9].[0-9]{2}.[0-9]{4}$';
  cnj = new FormControl('', {
    validators: [Validators.pattern(this.pattern), Validators.required],
  });
  form = this.fb.group({
    cnj: this.cnj,
  });
  temProcesso: boolean = false;

  constructor(
    private fb: FormBuilder,
    private dataService: DataService,
    private processoService: ProcessoService,
    ) {}

  onSubmit(value: CNJ): void {
    this.dataService
      .getProcesso(value.cnj)
      .pipe(
        tap(processo => {
          if (processo.hasOwnProperty('status_op'))
            this.temProcesso = false;
          else {
            this.temProcesso = true;
            this.processoService.emiteProcesso(processo);
          }
        }),
      )
      .subscribe();
  }
}
