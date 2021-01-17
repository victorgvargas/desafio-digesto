import { Tribproc } from './../../shared/models/tribproc.model';
import { DataService } from './../../shared/services/data-service/data.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-consulta-processos',
  templateUrl: './consulta-processos.component.html',
  styleUrls: ['./consulta-processos.component.scss'],
})
export class ConsultaProcessosComponent implements OnInit {
  pattern = '^[0-9]{7}-[0-9]{2}.[0-9]{4}.[0-9].[0-9]{2}.[0-9]{4}$';
  cnj = new FormControl('', {
    validators: Validators.pattern(this.pattern),
  });
  form = this.fb.group({
    cnj: this.cnj,
  });
  processo: Tribproc;

  constructor(private fb: FormBuilder, private dataService: DataService) {}

  ngOnInit(): void {
    this.dataService
      .getProcesso('5001682-88.2020.8.13.0672')
      .subscribe(processo => {
        this.processo = processo;
        console.log(processo);
      });
  }
}
