import { Component, Input } from '@angular/core';
import { NonNullableFormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { catchError } from 'rxjs';
import { CursosService } from 'src/app/services/cursos.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent {
  @Input() h1register:string = "";
  @Input() h1update: string = "";

  submitted: boolean = false;

  form = this.fb.group({
    id:[''],
    name:['', [Validators.required, Validators.minLength(3), Validators.maxLength(100)]],
    category:['', [Validators.required]],
    price:['', [Validators.required]]
  })

  constructor(private fb: NonNullableFormBuilder,
    private cursosService: CursosService,
    private toastr: ToastrService,
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
    if(this.form.valid) {
      this.cursosService.save(this.form.value).subscribe(curso => {
        this.toastr.success('CURSO cadastrado com sucesso!')
        this.router.navigate(['cursos']);
      })
    }
}
  onCancell(){
    this.router.navigate(['cursos'])
  }
}
