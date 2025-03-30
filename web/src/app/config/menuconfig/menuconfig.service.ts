import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../../../environten/envirotment';
import { menuConfig } from './menuconfig.interface';

@Injectable({
  providedIn: 'root'
})
export class MenuconfigService {
  base = environment.URL + 'menuconfig';
  

  constructor( private http:HttpClient) { }

  createConfigMenu(data:menuConfig){
    return this.http.post(this.base,{...data})
  }
  getConfigMenu(){
    return this.http.get(this.base)

  }
}
