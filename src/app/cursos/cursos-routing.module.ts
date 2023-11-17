import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListarCursosComponent } from './listar-cursos/listar-cursos.component';
import { CadastrarCursosComponent } from './cadastrar-cursos/cadastrar-cursos.component';
import { AtualizarCursosComponent } from './atualizar-cursos/atualizar-cursos.component';

const routes: Routes = [
  {path:'', component: ListarCursosComponent},
  {path:'cadastrar', component: CadastrarCursosComponent},
  {path:'atualizar', component: AtualizarCursosComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CursosRoutingModule { }
