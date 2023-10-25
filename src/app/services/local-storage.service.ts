import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LocalStorageService {

  constructor() { }

  get(key:string){
    return localStorage.getItem(key);
  }

  removeToken(){
    localStorage.removeItem('token');
  }

  saveToken(token:string){
    localStorage.setItem('token',token);
  }




}
