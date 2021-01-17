import { Tribproc } from './../../shared/models/tribproc.model';
import { Component, Input, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { tap, map } from 'rxjs/operators'

@Component({
  selector: 'app-processo',
  templateUrl: './processo.component.html',
  styleUrls: ['./processo.component.scss']
})
export class ProcessoComponent implements OnInit {
  @Input() processo$: Subject<Tribproc>;
  processo: Tribproc;
  movs: any[] = [];
  displayedColumns = ['data','andamento','texto'];

  constructor() { }

  ngOnInit(): void {
    this.processo$.pipe(
      tap(processo => this.processo = processo),
      map(processo => processo.movs.map(mov => this.movs.push(Object.assign({}, mov)))),
    ).subscribe(console.log);
  }

}
