import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ICursos } from '../models/ICursos';

@Injectable({
  providedIn: 'root'
})
export class CursosService {

  private baseURL: string = "http://localhost:3000/cursos";

  constructor(private http: HttpClient) {

   }

   list(){
    return this.http.get<ICursos[]>(this.baseURL);
   }
}
