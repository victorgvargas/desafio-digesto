import { Tribproc } from './../../shared/models/tribproc.model';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-processo',
  templateUrl: './processo.component.html',
  styleUrls: ['./processo.component.scss']
})
export class ProcessoComponent implements OnInit {
  @Input() processo: Tribproc;
  displayedColumns = [0,1,2];

  constructor() { }

  ngOnInit(): void {
    if (this.processo) {
      this.processo.movs.map(mov => Object.assign({}, mov));
    }
  }

}
