import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
h1: string = "bem vindo ao nosso projeto";
p: string = "nesse projeto você irá aprender o essencial para desenvolver uma aplicação em angular"
}
