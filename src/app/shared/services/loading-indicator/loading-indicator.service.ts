import { Injectable } from '@angular/core';
import { ReplaySubject, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoadingIndicatorService {
  loading$ = new Subject<boolean>();

  setLoading(): void {
    this.loading$.next(true);
  }

  unsetLoading(): void {
    this.loading$.next(false);
  }
}
