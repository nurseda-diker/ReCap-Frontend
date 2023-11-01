import { ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ColorService } from 'src/app/services/color.service';
import { Component, OnInit } from '@angular/core';
import { Color } from 'src/app/models/color';

@Component({
  selector: 'app-color-update',
  templateUrl: './color-update.component.html',
  styleUrls: ['./color-update.component.css']
})
export class ColorUpdateComponent implements OnInit{

  colorUpdateForm:FormGroup;
  color:Color;
  constructor(private colorService:ColorService,private formBuilder:FormBuilder,private toastrService:ToastrService,private activatedRoute:ActivatedRoute){}
  ngOnInit(): void {
    this.createColorUpdateForm();
    this.activatedRoute.params.subscribe(params=>{
      if(params["id"]){
        this.getColorById(params["id"]);
      }
    })
  }

  createColorUpdateForm(){
    this.colorUpdateForm=this.formBuilder.group({
      name:["",Validators.required]
    })
  }

  getColorById(id:number){
    this.colorService.getColorById(id).subscribe(response=>{
      this.color=response.data;
    })
  }


  update(){
    if(this.colorUpdateForm.valid){
      let colorModel=Object.assign({},this.colorUpdateForm.value);
      colorModel.id=this.color.id;

      this.colorService.update(colorModel).subscribe(response=>{
        this.toastrService.success(response.message,"Güncelleme başarılı");
      },responseError=>{
        if(responseError.error.Errors.length>0){
          for(let i=0;i<responseError.error.Errors.length;i++){
            this.toastrService.error(responseError.error.Errors[i].ErrorMessage,"Doğrulama hatası");
          }
        }
      }
      )
    }
    else{
      this.toastrService.error("Formunuz eksik");
    }
  }





}
