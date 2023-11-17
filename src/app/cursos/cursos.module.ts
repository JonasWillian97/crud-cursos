import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CursosRoutingModule } from './cursos-routing.module';
import { ListarCursosComponent } from './listar-cursos/listar-cursos.component';
import { CadastrarCursosComponent } from './cadastrar-cursos/cadastrar-cursos.component';
import { AtualizarCursosComponent } from './atualizar-cursos/atualizar-cursos.component';


@NgModule({
  declarations: [
    ListarCursosComponent,
    CadastrarCursosComponent,
    AtualizarCursosComponent
  ],
  imports: [
    CommonModule,
    CursosRoutingModule
  ]
})
export class CursosModule { }
