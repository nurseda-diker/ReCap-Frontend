import { BrandService } from './../../services/brand.service';
import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Car } from 'src/app/models/car';
import { CarService } from 'src/app/services/car.service';
import { Brand } from 'src/app/models/brand';
import { CarDetail } from 'src/app/models/carDetail';

@Component({
  selector: 'app-car',
  templateUrl: './car.component.html',
  styleUrls: ['./car.component.css'],
})
export class CarComponent implements OnInit {
  apiUrl = 'https://localhost:7216/api/cars/getall';
  cars: Car[] = [];
  carDetails: CarDetail[] = [];
  brands: Brand[] = [];
  dataLoaded = false;
  constructor(
    private carService: CarService,
    private brandService: BrandService
  ) {}

  ngOnInit(): void {
    this.getCars();
  }

  getCars() {
    this.carService.getCars().subscribe((response) => {
      this.cars = response.data;
      this.dataLoaded = true;
    });
  }
  
}
