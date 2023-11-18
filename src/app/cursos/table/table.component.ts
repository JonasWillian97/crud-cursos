import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { ICursos } from 'src/app/models/ICursos';
import { CursosService } from 'src/app/services/cursos.service';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent {

  cursos$: Observable<ICursos[]>;
  displayedColumns: string[] = ['id', 'name', 'category', 'price', 'actions'];

  constructor(private cursosService: CursosService){
    this.cursos$ = this.cursosService.list();
  }
}
