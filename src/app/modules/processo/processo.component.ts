import { ProcessoService } from './../../shared/services/processo/processo.service';
import { Tribproc } from './../../shared/models/tribproc.model';
import { Component, OnInit } from '@angular/core';
import { tap, map } from 'rxjs/operators'
@Component({
  selector: 'app-processo',
  templateUrl: './processo.component.html',
  styleUrls: ['./processo.component.scss']
})
export class ProcessoComponent implements OnInit {
  processo: Tribproc;
  movs = [];
  displayedColumns = ['data','andamento','texto'];

  constructor(private processoService: ProcessoService) { }

  ngOnInit(): void {
    this.processoService.processo$.pipe(
      tap(processo => {
        this.processo = processo;
        this.movs = [];
      }),
      map(processo => processo.movs.map(mov => this.movs.push(Object.assign({}, mov)))),
    ).subscribe();
  }

}
