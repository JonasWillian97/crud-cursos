import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  private userName: BehaviorSubject<string> = new BehaviorSubject<string>('');

  constructor() {

   }

   isAuthenticated():boolean{
    let user = this.userName.getValue();
    if(user){
      return true;
    } else {
      return false;
    }
   }

   getUsername(){
    return this.userName.asObservable();
   }

   setUsername(username: string){
    return this.userName.next(username);
   }
}
