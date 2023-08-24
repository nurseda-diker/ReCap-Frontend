import { CarImageService } from './../../services/car-image.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CarDetail } from 'src/app/models/carDetail';
import { CarImage } from 'src/app/models/carImage';
import { CarService } from 'src/app/services/car.service';

@Component({
  selector: 'app-car-detail',
  templateUrl: './car-detail.component.html',
  styleUrls: ['./car-detail.component.css']
})
export class CarDetailComponent implements OnInit{

  cars:CarDetail[]=[]
  carImages:CarImage[]=[]
  carDetails: CarDetail[] = [];
  dataLoaded=false;
  baseUrl:string="https://localhost:7216/Uploads/Images/"
  constructor(private carService:CarService,private activatedRoute: ActivatedRoute,private carImageService:CarImageService){}
  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params=>{
      if(params["id"]){
        this.getCarDetail(params["id"]);
        this.getCarImagesByCarId(params["id"]);
        
      }
      
    })
  }
  

  getCarDetail(carId: number) {
    this.carService.getCarsByCar(carId).subscribe(response => {
      this.cars = response.data;
      this.dataLoaded = true;
    });
  }

  getCarImages(){
    this.carImageService.getCarImages().subscribe(response=>{
      this.carImages=response.data;
      this.dataLoaded=true;
    })
  }

  getCarImagesByCarId(carId:number){
    this.carImageService.getCarImagesByCarId(carId).subscribe(response=>{
      this.carImages=response.data;
      this.dataLoaded=true;
    })
  }

  getCarImagesById(imageId:number){
    this.carImageService.getCarImagesById(imageId).subscribe(response=>{
      this.carImages=response.data;
      this.dataLoaded=true;
    })
  }

  

  
  


  

  }

  



