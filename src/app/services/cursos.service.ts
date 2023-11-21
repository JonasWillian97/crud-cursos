import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ICursos } from '../models/ICursos';
import { first } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CursosService {

  private baseURL: string = "http://localhost:3000/cursos";

  constructor(private http: HttpClient) {

   }

   list(){
    return this.http.get<ICursos[]>(this.baseURL).pipe(
      first()
    );
   }

   getById(id: number){
    return this.http.get<ICursos>(`${this.baseURL}/${id}`).pipe(
      first()
    );
   }

   save(curso:  Partial <ICursos>){
    return this.http.post<ICursos>(this.baseURL, curso ).pipe(
      first()
    );
   }

   alter(curso:  Partial <ICursos>){
    return this.http.put<ICursos>(`${this.baseURL}/${curso.id}`, curso ).pipe(
      first()
    );
   }
}
