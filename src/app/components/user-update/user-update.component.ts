import { LocalStorageService } from './../../services/local-storage.service';
import { ActivatedRoute, Router } from '@angular/router';

import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserService } from './../../services/user.service';
import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/user';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-user-update',
  templateUrl: './user-update.component.html',
  styleUrls: ['./user-update.component.css']
})
export class UserUpdateComponent implements OnInit{

  userUpdateForm:FormGroup;
  user:User;
  email=this.localStorageService.get("email");

  constructor(private userService:UserService,private formBuilder:FormBuilder,private toastrService:ToastrService,private activatedRoute:ActivatedRoute,private router:Router,private localStorageService:LocalStorageService){}
  
  ngOnInit(): void {
   this.createUserUpdateForm();
   if(this.email){
    this.getUser(this.email);
   }
   
  }

  createUserUpdateForm(){
    this.userUpdateForm=this.formBuilder.group({
      firstName:["",Validators.required],
      lastName:["",Validators.required],
      email:["",Validators.required],
      password:["",Validators.required],
      status:true
     
    })
  }

  update(){
    if(this.userUpdateForm.valid){
      let userModel=Object.assign({},this.userUpdateForm.value);
      userModel.id=this.user.id;
      console.log(userModel)
    
      this.userService.update(userModel).subscribe(response=>{
        this.toastrService.success(response.message,"Güncelleme başarılı");
        this.localStorageService.clean();
        this.router.navigate(["/login"])  
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

  getUser(email:string){
    this.userService.getUserByMail(email).subscribe(response=>{
      this.user=response.data;
    })
  }



}
