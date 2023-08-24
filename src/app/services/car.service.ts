import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ListResponseModel } from '../models/listResponseModel';
import { Car } from '../models/car';

@Injectable({
  providedIn: 'root'
})
export class CarService {

  apiUrl="https://localhost:7216/api/";
  constructor(private httpClient:HttpClient) { }

  getCars():Observable<ListResponseModel<Car>>{
    let newPath=this.apiUrl+"cars/getcardetails";
    return this.httpClient.get<ListResponseModel<Car>>(newPath);
  }

  getCarsByBrand(id:number):Observable<ListResponseModel<Car>>{
    let newPath=this.apiUrl+'cars/getcardetailsbybrandid?id='+id;
    return this.httpClient.get<ListResponseModel<Car>>(newPath);
  }

  getCarsByColor(id:number):Observable<ListResponseModel<Car>>{
    let newPath=this.apiUrl+'cars/getcardetailsbycolorid?id='+id;
    return this.httpClient.get<ListResponseModel<Car>>(newPath);
  }

  getCarsByCar(id:number):Observable<ListResponseModel<Car>>{
    let newPath=this.apiUrl+'cars/getcardetailsbycarid?id='+id;
    return this.httpClient.get<ListResponseModel<Car>>(newPath);
  }

 

  

  




}
