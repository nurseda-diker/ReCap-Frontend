import { LocalStorageService } from './local-storage.service';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { LoginModel } from '../models/loginModel';
import { SingleResponseModel } from '../models/singleResponseModel';
import { TokenModel } from '../models/tokenModel';
import { RegisterModel } from '../models/registerModel';
import { Observable } from 'rxjs';
import { User } from '../models/user';
import { JwtHelperService } from '@auth0/angular-jwt';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  jwtHelper=new JwtHelperService();
  userId:number;

 

  apiUrl="https://localhost:7216/api/"
  constructor(private httpClient:HttpClient,private localStorageService:LocalStorageService) { 
    this.setUserId();
  }

  login(loginModel:LoginModel){
    return this.httpClient.post<SingleResponseModel<TokenModel>>(this.apiUrl +"auth/login",loginModel);
  }

  isAuthenticated(){
    if(localStorage.getItem("token")){
      return true;
    }
    else{
      return false;
    }
  }

  register(registerModel:RegisterModel){
    return this.httpClient.post<SingleResponseModel<TokenModel>>(this.apiUrl + "auth/register",registerModel);
  }

  
  getFullName(){
    let token:string=localStorage.getItem("token");
    if(token){
      let decoded=this.jwtHelper.decodeToken(token);
      let userName=Object.keys(decoded).filter(x=>x.endsWith("/name"))[0];
      return decoded[userName];
    }
    return null;
  }

  getUserId(){
    return this.userId;
  }

  setUserId(){
    if (this.localStorageService.get("token")) {
      var decoded = this.jwtHelper.decodeToken(this.localStorageService.get("token"));
      var propUserId = Object.keys(decoded).filter(x => x.endsWith("/nameidentifier"))[0];
      this.userId = Number(decoded[propUserId]);
    }
  }




  

}
