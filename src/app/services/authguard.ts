import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { LoginService } from './login.service';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})

export class Authguard {

  constructor(private loginService: LoginService,
    private router: Router) { }

  canActivate():Observable <boolean> | boolean{
    let logged = this.loginService.isAuthenticated();

    if(!logged) {
      this.router.navigate(['login'])
    }

    return logged;
  }
}
