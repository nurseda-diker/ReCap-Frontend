import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LocalStorageService {

  localStorage:Storage;
  constructor() {
    this.localStorage=window.localStorage;
  }

  get(key:string){
    return this.localStorage.getItem(key);
  }

  removeToken(){
    this.localStorage.removeItem('token');
  }

  add(key:string,value:string){
    return this.localStorage.setItem(key,value);
  }

  clean(){
    this.localStorage.clear();
  }



}
