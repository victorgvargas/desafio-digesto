import { ProcessoService } from './../../shared/services/processo/processo.service';
import { Tribproc } from './../../shared/models/tribproc.model';
import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { tap, map, finalize } from 'rxjs/operators';
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
  loading = false;

  @ViewChild(MatPaginator) paginator: MatPaginator;

  constructor(private processoService: ProcessoService) {}

  ngOnInit(): void {
    this.processoService.processo$
      .pipe(
        tap((processo) => {
          this.processo = processo;
          this.movs = [];
        }),
        map((processo) => {
          processo.movs.forEach((mov, index) => {
            this.movs.push(Object.assign({}, mov));
            this.dataSource.data.push(this.movs[index]);
          });
        })
      )
      .subscribe();
  }

  ngAfterViewInit(): void {
    this.dataSource.paginator = this.paginator;
  }
}
