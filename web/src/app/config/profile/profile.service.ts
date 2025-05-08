import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../../../environten/envirotment';
import { menuConfig } from '../menuconfig/menuconfig.interface';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {

  base = environment.URL + 'config/profile';
  

  constructor( private http:HttpClient) { }

  createProfile(data:{nombre:string}){
    return this.http.post(this.base,{...data})
  }
  getProfile(){
    return this.http.get<any>(this.base)

  }
  
}
