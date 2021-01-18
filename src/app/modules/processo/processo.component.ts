import { ProcessoService } from './../../shared/services/processo/processo.service';
import { Tribproc } from './../../shared/models/tribproc.model';
import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { delay, tap } from 'rxjs/operators';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
@Component({
  selector: 'app-processo',
  templateUrl: './processo.component.html',
  styleUrls: ['./processo.component.scss'],
})
export class ProcessoComponent implements OnInit, AfterViewInit {
  processo: Tribproc;
  movs = [];
  dataSource = new MatTableDataSource(this.movs);
  displayedColumns = ['data', 'andamento', 'texto'];
  loading: boolean = false;

  @ViewChild(MatPaginator) paginator: MatPaginator;

  constructor(
    private processoService: ProcessoService,
  ) {}

  ngOnInit(): void {
    this.processoService.processo$
      .pipe(
        tap(() => this.loading = true),
        delay(300),
        tap((processo) => {
          this.processo = processo;
          this.movs = [];

          let itensProcessados = 0;
          processo.movs.forEach((mov, index) => {
            itensProcessados++;
            this.movs.push(Object.assign({}, mov));
            this.dataSource.data.push(this.movs[index]);
            if (itensProcessados === processo.movs.length) {
              this.loading = false;
            }
          });
        }),
      )
      .subscribe(() => console.log(this.loading));
  }

  ngAfterViewInit(): void {
    this.dataSource.paginator = this.paginator;
  }
}
