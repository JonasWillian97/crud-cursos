import { Component, Input } from '@angular/core';
import { NonNullableFormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CursosService } from 'src/app/services/cursos.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent {
  @Input() h1register:string = "";
  @Input() h1update: string = "";
  form = this.fb.group({
    id:[''],
    name:['', [Validators.required, Validators.minLength(3), Validators.maxLength(100)]],
    category:['', [Validators.required]],
    price:['', [Validators.required]]
  })

  constructor(private fb: NonNullableFormBuilder,
    private cursosService: CursosService,
    private router: Router){

  }

  get name(){
    return this.form.get('name')!;
  }


  get category(){
    return this.form.get('category')!;
  }


  get price(){
    return this.form.get('price')!;
  }

  onSubmit(){

  }

  onCancell(){
    this.router.navigate(['cursos'])
  }
}
