import { ToastrService } from 'ngx-toastr';
import { CarImageService } from './../../services/car-image.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CarDetail } from 'src/app/models/carDetail';
import { CarImage } from 'src/app/models/carImage';
import { CarService } from 'src/app/services/car.service';
import { Car } from 'src/app/models/car';


@Component({
  selector: 'app-car-detail',
  templateUrl: './car-detail.component.html',
  styleUrls: ['./car-detail.component.css']
})
export class CarDetailComponent implements OnInit{

  
  carImages:CarImage[]=[]
  carDetails: CarDetail[] = [];
  carDetail:CarDetail;
  dataLoaded=false;
  baseUrl:string="https://localhost:7216/Uploads/Images/"
  constructor(private carService:CarService,private activatedRoute: ActivatedRoute,private carImageService:CarImageService,private toastrService:ToastrService){}
  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params=>{
      if(params["id"]){
        this.getCarDetail(params["id"]);
        this.getCarImagesByCarId(params["id"]);
        
      }

      
    })
  }


  getCarDetail(id: number) {
    this.carService.getCarsByCar(id).subscribe(response => {
      this.carDetail = response.data;
      console.log(this.carDetail)
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
      console.log(this.carImages)
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

  



