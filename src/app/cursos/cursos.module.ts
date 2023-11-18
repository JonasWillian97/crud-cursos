import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CursosRoutingModule } from './cursos-routing.module';
import { ListarCursosComponent } from './listar-cursos/listar-cursos.component';
import { CadastrarCursosComponent } from './cadastrar-cursos/cadastrar-cursos.component';
import { AtualizarCursosComponent } from './atualizar-cursos/atualizar-cursos.component';
import { TableComponent } from './table/table.component';
import { MaterialModule } from '../material/material.module';


@NgModule({
  declarations: [
    ListarCursosComponent,
    CadastrarCursosComponent,
    AtualizarCursosComponent,
    TableComponent
  ],
  imports: [
    CommonModule,
    CursosRoutingModule,
    MaterialModule
  ]
})
export class CursosModule { }
