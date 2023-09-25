import { ToastrService } from 'ngx-toastr';
import { BrandService } from 'src/app/services/brand.service';
import { Component, OnInit } from '@angular/core';
import { Brand } from 'src/app/models/brand';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-brand-update',
  templateUrl: './brand-update.component.html',
  styleUrls: ['./brand-update.component.css']
})
export class BrandUpdateComponent implements OnInit {

  brand:Brand;
  brandUpdateForm:FormGroup;
  constructor(private brandService:BrandService,private toastrService:ToastrService,private formBuilder:FormBuilder,private activatedRoute:ActivatedRoute){}
 
  ngOnInit(): void {
    this.createBrandUpdateForm();
    this.activatedRoute.params.subscribe(params=>{
      if(params["id"]){
        this.getBrandById(params["id"])
      }
    }
    )
  
  
      
  }

  createBrandUpdateForm(){
    this.brandUpdateForm=this.formBuilder.group({
      name:["",Validators.required]
    })
  }

  getBrandById(id:number){
    this.brandService.getBrandById(id).subscribe(response=>{
      this.brand = response.data;
      console.log(response.data)
   
    
    });
  }



  update(){
    if(this.brandUpdateForm.valid){
      let brandModel=Object.assign({},this.brandUpdateForm.value);
      brandModel.id=this.brand.id;
      this.brandService.update(brandModel).subscribe(response=>{
        this.toastrService.success(response.message,"Güncelleme başarılı");

        console.log(response)
      },responseError=>{
        if(responseError.error.Errors.length>0){
          for(let i=0;i<responseError.error.Errors.length;i++){
            this.toastrService.error(responseError.error.Errors[i].ErrorMessage,"Doğrulama hatası");
          }
        }
      })
    }else{
      this.toastrService.error("Formunuz eksik","Dikkat");
      
    }
  }



  
    

}
