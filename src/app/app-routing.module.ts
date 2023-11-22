import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { ContatoComponent } from './pages/contato/contato.component';
import { LoginComponent } from './pages/login/login.component';
import { Authguard } from './services/authguard';

const routes: Routes = [
  {path:'login', component:LoginComponent},
  {path:'home', component: HomeComponent, canActivate: [Authguard]},
  {
    path: 'cursos', canActivate: [Authguard],
    loadChildren: () => import('./cursos/cursos.module').then(m => m.CursosModule)
  },
  {path:'contato', component: ContatoComponent, canActivate: [Authguard]},
  {path:'**', redirectTo: 'login', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
