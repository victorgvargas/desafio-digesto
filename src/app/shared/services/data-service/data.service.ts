import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Tribproc } from '../../models/tribproc.model';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  private params = {tipo_numero: '5' };

  constructor(private http: HttpClient) {}

  getProcesso(cnj: string): Observable<Tribproc> {
    return this.http.get<Tribproc>(`${environment.apiUrl}tribproc/${cnj}`, {
      params: this.params,
    });
  }
}
