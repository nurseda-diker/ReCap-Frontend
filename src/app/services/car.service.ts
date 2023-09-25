import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ListResponseModel } from '../models/listResponseModel';
import { Car } from '../models/car';
import { ResponseModel } from '../models/responseModel';
import { CarDetail } from '../models/carDetail';
import { SingleResponseModel } from '../models/singleResponseModel';

@Injectable({
  providedIn: 'root'
})
export class CarService {

  apiUrl="https://localhost:7216/api/";
  constructor(private httpClient:HttpClient) { }

  getCars():Observable<ListResponseModel<CarDetail>>{
    let newPath=this.apiUrl+"cars/getcardetails";
    return this.httpClient.get<ListResponseModel<CarDetail>>(newPath);
  }


  getCarsByBrand(id:number):Observable<ListResponseModel<Car>>{
    let newPath=this.apiUrl+'cars/getcardetailsbybrandid?id='+id;
    return this.httpClient.get<ListResponseModel<Car>>(newPath);
  }

  getCarsByColor(id:number):Observable<ListResponseModel<Car>>{
    let newPath=this.apiUrl+'cars/getcardetailsbycolorid?id='+id;
    return this.httpClient.get<ListResponseModel<Car>>(newPath);
  }

  getCarsByCar(id:number):Observable<ListResponseModel<CarDetail>>{
    let newPath=this.apiUrl+'cars/getcardetailsbycarid?id='+id;
    return this.httpClient.get<ListResponseModel<CarDetail>>(newPath);
  }

  getCarsByBrandAndColor(brandId:number,colorId:number):Observable<ListResponseModel<CarDetail>>{
    let newPath=this.apiUrl+'cars/getcardetailsbybrandandcolor?brandId='+brandId+ '&colorId=' +colorId;
    return this.httpClient.get<ListResponseModel<CarDetail>>(newPath);
  }

  add(car:Car):Observable<ResponseModel>{
    return this.httpClient.post<ResponseModel>(this.apiUrl + "cars/add",car);
  }

  update(car:Car):Observable<ResponseModel>{
    return this.httpClient.post<ResponseModel>(this.apiUrl + "cars/update",car);
  }

  getCarById(carId:number):Observable<SingleResponseModel<CarDetail>>{
    let newPath=this.apiUrl + "cars/getcardetailsbycarid?id="+carId;
    return this.httpClient.get<SingleResponseModel<CarDetail>>(newPath);
  }
 

  

  




}
