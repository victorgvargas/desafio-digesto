import { ReplaySubject } from 'rxjs';
import { Injectable } from '@angular/core';
import { Tribproc } from './../../models/tribproc.model';

@Injectable({
  providedIn: 'root'
})
export class ProcessoService {
  processo$ = new ReplaySubject<Tribproc>(1);

  emiteProcesso(processo: Tribproc) {
    this.processo$.next(processo);
  }
}
