import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { ListResponseModel } from '../models/listResponseModel';
import { Brand } from '../models/brand';
import { ResponseModel } from '../models/responseModel';
import { SingleResponseModel } from '../models/singleResponseModel';                                                          

@Injectable({
  providedIn: 'root',
})
export class BrandService {
  apiUrl = 'https://localhost:7216/api/';
  constructor(private httpClient: HttpClient) {}

  getBrands(): Observable<ListResponseModel<Brand>> {
    let newPath=this.apiUrl +"brands/getall";
    return this.httpClient.get<ListResponseModel<Brand>>(newPath);
  }

  add(brand:Brand):Observable<ResponseModel>{
    return this.httpClient.post<ResponseModel>(this.apiUrl +"brands/add",brand);
  }

  update(brand:Brand):Observable<ResponseModel>{
    return this.httpClient.post<ResponseModel>(this.apiUrl + "brands/update",brand);
  }

  getBrandById(id:number):Observable<SingleResponseModel<Brand>>{
    let newPath=this.apiUrl + "brands/getbyid?id="+id;
    return this.httpClient.get<SingleResponseModel<Brand>>(newPath);
  }

  

  
}
