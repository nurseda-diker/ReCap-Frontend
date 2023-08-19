import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Car } from 'src/app/models/car';
import { CarService } from 'src/app/services/car.service';


@Component({
  selector: 'app-car',
  templateUrl: './car.component.html',
  styleUrls: ['./car.component.css'],
})
export class CarComponent implements OnInit {
  apiUrl = 'https://localhost:7216/api/cars/getall';
  cars: Car[] = [];
  dataLoaded = false;
  constructor(
    private carService: CarService,
    private activatedRoute:ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params=>{
      if(params["id"]){
        this.getCarsByBrand(params["id"]);
        this.getCarsByColor(params["id"]);
      }
      else{
        this.getCars();
      }
    })
  }

  getCars() {
    this.carService.getCars().subscribe((response) => {
      this.cars = response.data;
      this.dataLoaded = true;
    });
  }

  getCarsByBrand(id:number){
    this.carService.getCarsByBrand(id).subscribe(response=>{
      this.cars=response.data;
      this.dataLoaded=true;
    })
  }

  getCarsByColor(id:number){
    this.carService.getCarsByColor(id).subscribe(response=>{
      this.cars=response.data;
      this.dataLoaded=true;
    })
  }

  
}
