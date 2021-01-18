import { LoadingIndicatorService } from './../../shared/services/loading-indicator/loading-indicator.service';
import { ProcessoService } from './../../shared/services/processo/processo.service';
import { tap } from 'rxjs/operators';
import { DataService } from './../../shared/services/data-service/data.service';
import { Component } from '@angular/core';
import { FormBuilder, FormControl, NgForm, Validators } from '@angular/forms';
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
  temProcesso = false;
  jaAcessado = false;

  constructor(
    private fb: FormBuilder,
    private dataService: DataService,
    private processoService: ProcessoService,
    private loadingIndicatorService: LoadingIndicatorService,
    ) {}

  onSubmit(value: CNJ, form: NgForm): void {
    this.loadingIndicatorService.setLoading();

    this.dataService
      .getProcesso(value.cnj)
      .pipe(
        tap(processo => {
          if (processo.hasOwnProperty('status_op')) {
            this.jaAcessado = true;
            this.temProcesso = false;
          }
          else {
            this.jaAcessado = true;
            this.temProcesso = true;
            this.processoService.emiteProcesso(processo);
          }
          form.resetForm();
        }),
      )
      .subscribe();
  }
}
