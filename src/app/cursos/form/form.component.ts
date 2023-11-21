import { Component, Input } from '@angular/core';
import { NonNullableFormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { catchError } from 'rxjs';
import { ICursos } from 'src/app/models/ICursos';
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
    private route: ActivatedRoute,
    private router: Router){

      const id = Number(this.route.snapshot.paramMap.get('id'));
      this.cursosService.getById(id).subscribe(curso => {
        this.update (curso)
      })
  }

  update(curso: ICursos){
    this.form.patchValue({
      id: curso.id,
      name: curso.name,
      category: curso.category,
      price: curso.price
    })
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
      if(this.form.valid) {
        this.cursosService.alter(this.form.value).subscribe(curso => {
          this.toastr.success('CURSO atualizado com sucesso!')
          this.router.navigate(['cursos'])
        })
      }
    }
     else {
      this.toastr.error('NÃO foi possível realizar a sua ação!');
     }
}
  onCancell(){
    this.router.navigate(['cursos'])
  }
}
