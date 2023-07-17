import { NgModule } from '@angular/core';
import { RouteReuseStrategy, RouterModule, Routes } from '@angular/router';
import { CriaPensamentosComponent } from './componentes/pensamentos/cria-pensamentos/cria-pensamentos.component';
import { ListarPensamentoComponent } from './componentes/pensamentos/listar-pensamento/listar-pensamento.component';
import { ExcluirPensamentoComponent } from './componentes/pensamentos/excluir-pensamento/excluir-pensamento.component';
import { EditarPensamentoComponent } from './componentes/pensamentos/editar-pensamento/editar-pensamento.component';
import { CustomReuseStrategy } from './custom-reuse-estrategy';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'listarPensamento',
    pathMatch: 'full'
  },
  {
    path: 'criarPensamento',
    component: CriaPensamentosComponent
  },
  {
    path: 'listarPensamento',
    component: ListarPensamentoComponent,
    data: {
      reuseComponent: true
    }
  },
  {
    path: 'pensamentos/excluirPensamento/:id',
    component: ExcluirPensamentoComponent
  },
  {
    path: 'pensamentos/editarPensamento/:id',
    component: EditarPensamentoComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {onSameUrlNavigation: 'reload'})],
  exports: [RouterModule],
  providers: [
    {provide: RouteReuseStrategy, useClass: CustomReuseStrategy}
  ]
})
export class AppRoutingModule { }
