import { Component, OnInit } from '@angular/core';
import { LoginService } from './services/login.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'crud-cursos';
  showFiller = false;
  authenticated: boolean = false;

  constructor(private loginService: LoginService){
    this.loginService.isAuthenticated();
    
    }

    ngOnInit(): void {
      this.loginService.getUsername().subscribe(retorno => {

        if(retorno){
           this.authenticated = true;
        } else {
          this.authenticated = false;
        }
      })
    }
  }

