import { Component, Input } from '@angular/core';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent {
  @Input() Drawer: any;
  loggedUser: string = "";

  constructor(private loginService: LoginService){
    this.loginService.getUsername().subscribe(retorno => {
      this.loggedUser = retorno;
    })
  }



  showMenu(){
    return this.Drawer.toggle();
  }

}
