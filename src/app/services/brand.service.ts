import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { ListResponseModel } from '../models/listResponseModel';
import { Brand } from '../models/brand';

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

  

  
}
