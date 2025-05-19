import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../../../environten/envirotment';
import { menuConfig } from '../menuconfig/menuconfig.interface';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {

  base = environment.URL + 'config/profile';
  base2 = environment.URL + 'menuconfig/';
  

  constructor( private http:HttpClient) { }

  createProfile(data:{nombre:string}){
    return this.http.post(this.base,{...data})
  }
  getProfile(){
    return this.http.get<any>(this.base)

  }
  get_allRouts(){
    return this.http.get<any>(this.base+"/routs")

  }
  get_RoutsByProfile(id:string){
    return this.http.get<any>(this.base2+'allroutes'+"/"+id)

  }
  get_RoutsInNotProfile(id:string){
    return this.http.get<any>(this.base2+'allroutesinnotprofile'+"/"+id)

  }
  
}
