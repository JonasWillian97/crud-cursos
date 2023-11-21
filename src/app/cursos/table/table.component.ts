import { Component } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { Observable, catchError, of } from 'rxjs';
import { ICursos } from 'src/app/models/ICursos';
import { CursosService } from 'src/app/services/cursos.service';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent {

  cursos$!: Observable<ICursos[]>;
  displayedColumns: string[] = ['id', 'name', 'category', 'price', 'actions'];

  constructor(private cursosService: CursosService,
    private toastr: ToastrService){
        this.getAll();
  }

 

  getAll(){
    this.cursos$ = this.cursosService.list().pipe(
      catchError(error => {
      console.log(error),
      this.toastr.error('ERRO ao carregar cursos!')
      return of([])
      })
    );
  }

  delete(id: number){
    return this.cursosService.remove(id).subscribe(curso => {
      this.toastr.success('CURSO excluído com sucesso!')
      this.getAll();
    })
  }
}
