import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CursosRoutingModule } from './cursos-routing.module';
import { ListarCursosComponent } from './listar-cursos/listar-cursos.component';
import { CadastrarCursosComponent } from './cadastrar-cursos/cadastrar-cursos.component';
import { AtualizarCursosComponent } from './atualizar-cursos/atualizar-cursos.component';
import { TableComponent } from './table/table.component';
import { MaterialModule } from '../material/material.module';
import { FormComponent } from './form/form.component';
import { ReactiveFormsModule } from '@angular/forms';
import { LoadingComponent } from './loading/loading.component';


@NgModule({
  declarations: [
    ListarCursosComponent,
    CadastrarCursosComponent,
    AtualizarCursosComponent,
    TableComponent,
    FormComponent,
    LoadingComponent
  ],
  imports: [
    CommonModule,
    CursosRoutingModule,
    MaterialModule,
    ReactiveFormsModule
  ]
})
export class CursosModule { }
