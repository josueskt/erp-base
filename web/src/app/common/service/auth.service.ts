import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private http:HttpClient){}

  // base = environment.URL;
  //private loginUrl  =  `${this.base}login`;
  getToken(): string | null {
    return localStorage.getItem('token');
  }

  getUserInfo(): any | null {
    const token = this.getToken();
    if (token) {
      const userInfo = JSON.parse(atob(token.split('.')[1]));
      return userInfo;
    }
    return null;
  }

  getUserRole(): string | null {
    const userInfo = this.getUserInfo();
    return userInfo ? userInfo.nombre_rol : null;
  }
  // frosbine(){
  //   return this.http.get(this.loginUrl);
 
  // }

  isAuthenticated(): boolean {
    return this.getToken() !== null;
  }

  clearToken(): void {
    localStorage.removeItem('token');
    
  }
}
