import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CreditCard } from '../models/creditCard';
import { Observable } from 'rxjs';
import { ResponseModel } from '../models/responseModel';
import { SingleResponseModel } from '../models/singleResponseModel';
import { ListResponseModel } from '../models/listResponseModel';

@Injectable({
  providedIn: 'root'
})
export class CreditCardService {

  apiUrl = 'https://localhost:7216/api/';
  constructor(private httpClient: HttpClient) {}


  add(creditCard:CreditCard):Observable<ResponseModel>{
    return this.httpClient.post<ResponseModel>(this.apiUrl + "CreditCards/add",creditCard);
  }

  delete(creditCard:CreditCard):Observable<SingleResponseModel<CreditCard>>{
    return this.httpClient.post<SingleResponseModel<CreditCard>>(this.apiUrl + "CreditCards/delete",creditCard);

  }

  getByCustomerId(customerId:number):Observable<ListResponseModel<CreditCard>>{
    let newPath=this.apiUrl + "CreditCards/getcustomerid?customerId="+customerId;
    return this.httpClient.get<ListResponseModel<CreditCard>>(newPath);
  }

}
