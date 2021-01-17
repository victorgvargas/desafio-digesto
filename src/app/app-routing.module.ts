import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: 'consulta-processos',
    loadChildren: () =>
      import('./modules/processos.module').then(
        (m) => m.ProcessosModule
      ),
  },
  {
    path: '',
    redirectTo: '/consulta-processos',
    pathMatch: 'full',
  },
  {
    path: '**',
    redirectTo: '/consulta-processos',
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
