import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { SingleResponseModel } from '../models/singleResponseModel';
import { User } from '../models/user';
import { ListResponseModel } from '../models/listResponseModel';
import { ResponseModel } from '../models/responseModel';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  apiUrl='https://localhost:7216/api/';
  constructor(private httpClient:HttpClient) { }


  getUserByMail(email:string):Observable<SingleResponseModel<User>>{
    let newPath=this.apiUrl+"users/getbymail?email=" + email;
    return this.httpClient.get<SingleResponseModel<User>>(newPath);
  }

  getUserById(id:number):Observable<ListResponseModel<User>>{
    let newPath=this.apiUrl + "users/getbyid?id=" + id;
    return this.httpClient.get<ListResponseModel<User>>(newPath);
  }

  update(user:User):Observable<ResponseModel>{
    return this.httpClient.post<ResponseModel>(this.apiUrl + "users/updateinfo",user);
  }

 



}
