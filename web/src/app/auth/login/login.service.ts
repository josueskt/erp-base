import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(readonly http:HttpClient ) {  }
  login(user:any){
    return this.http.post<{token:string}>('http://localhost:3000/login',{email:user.email,pass:user.pass})
  }
}
