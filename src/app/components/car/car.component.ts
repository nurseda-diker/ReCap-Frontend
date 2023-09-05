import { ToastrService } from 'ngx-toastr';
import { CartService } from './../../services/cart.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Brand } from 'src/app/models/brand';
import { Car } from 'src/app/models/car';
import { Color } from 'src/app/models/color';
import { BrandService } from 'src/app/services/brand.service';
import { CarService } from 'src/app/services/car.service';
import { ColorService } from 'src/app/services/color.service';


@Component({
  selector: 'app-car',
  templateUrl: './car.component.html',
  styleUrls: ['./car.component.css'],
})
export class CarComponent implements OnInit {
  apiUrl = 'https://localhost:7216/api/cars/getall';
  cars: Car[] = [];
  brands:Brand[]=[];
  colors:Color[]=[];
  dataLoaded = false;
  filterText="";
  brandFilter:number;
  colorFilter:number;
  
  constructor(
    private carService: CarService,
    private activatedRoute:ActivatedRoute,
    private brandService:BrandService,
    private colorService:ColorService,
    private cartService:CartService,
    private toastrService:ToastrService
  ) {}

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params=>{
      if(params["id"]){
        this.getCarsByBrand(params["id"]);
        this.getCarsByColor(params["id"]);
        this.getCarsByCar(params["id"])
      }
      else{
        this.getCars();
        this.getBrands();
        this.getColors();
      }
    })
  }

  getCars() {
    this.carService.getCars().subscribe((response) => {
      this.cars = response.data;
      this.dataLoaded = true;
    });
  }

  getBrands(){
    this.brandService.getBrands().subscribe((response)=>{
      this.brands=response.data;
      this.dataLoaded=true;
    })
  }

  getColors(){
    this.colorService.getColors().subscribe((response)=>{
      this.colors=response.data;
      this.dataLoaded=true;
    })
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

  getCarsByCar(id:number){
    this.carService.getCarsByCar(id).subscribe(response=>{
      this.cars=response.data;
      this.dataLoaded=true;
    })
  }

  getCarsByBrandAndColor(brandId:number,colorId:number){
    this.carService.getCarsByBrandAndColor(brandId,colorId).subscribe(response=>{
      this.cars=response.data;
      this.dataLoaded=true;
      console.log(response.data)
    })
  }
  addToCart(car:Car){
    if(car.carId===2){
      this.toastrService.error("Hata!Bu ürün sepete eklenemez");
    }
    else{
      this.toastrService.success("Sepete eklendi",car.carName);
      this.cartService.addToCart(car);
    }
    

  }


  

  

  
}
