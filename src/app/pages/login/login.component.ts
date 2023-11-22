import { Component } from '@angular/core';
import { LoginService } from '../../services/login.service';
import { FormGroup, NonNullableFormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  hide = true;
  login: string = 'login';
  
  form: FormGroup = this.fb.group({
    username: ['', [Validators.required, Validators.minLength(3)]],
    password: ['', [Validators.required, Validators.minLength(6)]]
  })


  constructor(private loginService: LoginService,
    private fb: NonNullableFormBuilder,
    private router: Router){

  }

  get username(){
    return this.form.get('username')!;
  }

  get password(){
    return this.form.get('password')!;
  }

  onLogin(){
    if(this.form.value){
      this.loginService.setUsername(this.form.value.username)
      this.router.navigate(['home'])
    }
  }


}
