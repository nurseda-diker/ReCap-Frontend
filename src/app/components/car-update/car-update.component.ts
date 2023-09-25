import { ActivatedRoute } from '@angular/router';
import { ColorService } from 'src/app/services/color.service';
import { BrandService } from 'src/app/services/brand.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { CarService } from 'src/app/services/car.service';
import { Component, OnInit } from '@angular/core';
import { Car } from 'src/app/models/car';
import { Brand } from 'src/app/models/brand';
import { Color } from 'src/app/models/color';
import { CarDetail } from 'src/app/models/carDetail';

@Component({
  selector: 'app-car-update',
  templateUrl: './car-update.component.html',
  styleUrls: ['./car-update.component.css']
})
export class CarUpdateComponent implements OnInit{

  carUpdateForm:FormGroup;
  car:CarDetail;
  brands:Brand[]=[]
  colors:Color[]=[]
  constructor(private carService:CarService,private toastrService:ToastrService,private formBuilder:FormBuilder,private brandService:BrandService,private colorService:ColorService,private activatedRoute:ActivatedRoute){}
  ngOnInit(): void {
    
    this.activatedRoute.params.subscribe(params=>{
      if(params["carId"]){
        this.getCarById(params["carId"]);
      }
    })
    this.createCarUpdateForm();
    this.getBrands();
    this.getColors();


  }


  createCarUpdateForm(){
    this.carUpdateForm=this.formBuilder.group({
      carName:["",Validators.required],
      brandId:["",Validators.required],
      colorId:["",Validators.required],
      modelYear:["",Validators.required],
      dailyPrice:["",Validators.required],
      description:["",Validators.required],
      carImage:["",Validators.required]
    
    })
  }


  update(){
    if(this.carUpdateForm.valid){
      let carModel=Object.assign({},this.carUpdateForm.value);
      carModel.carId=this.car.carId;
      console.log(this.car)
      console.log(this.car.carName)
      console.log(this.car.carId)
      console.log(carModel)
      this.carService.update(carModel).subscribe(response=>{
        this.toastrService.success(response.message,"Güncelleme başarılı");
      },responseError=>{
        if(responseError.error.Errors.length>0){
          for(let i=0;i<responseError.error.Errors.length;i++){
            this.toastrService.error(responseError.error.Errors[i].ErrorMessage,"Doğrulama hatası");
          }
        }
      })
    }
    else{
      this.toastrService.error("Formunuz eksik","Dikkat!");
    }
  }

  getBrands(){
    this.brandService.getBrands().subscribe(response=>{
      this.brands=response.data;
    })
  }

  getColors(){
    this.colorService.getColors().subscribe(response=>{
      this.colors=response.data;
    })
  }

  getCarById(carId:number){
    this.carService.getCarById(carId).subscribe(response=>{
      this.car=response.data;
      console.log("getcarbyid")
      console.log(response.data);
    })
  }

}
