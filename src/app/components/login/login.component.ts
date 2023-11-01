import { Router } from '@angular/router';
import { AuthService } from './../../services/auth.service';
import { ToastrService } from 'ngx-toastr';
import { FormBuilder, FormGroup, Validators,FormControl } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit{

  loginForm:FormGroup;
  constructor(private formBuilder:FormBuilder,private toastrService:ToastrService,private authService:AuthService,private router:Router){}
  ngOnInit(): void {
    this.createLoginForm();
  }

  createLoginForm(){
    this.loginForm=this.formBuilder.group({
      email:["",Validators.required],
      password:["",Validators.required]
    })
  }

  login(){
    if(this.loginForm.valid){
      let loginModel=Object.assign({},this.loginForm.value);
      console.log(this.loginForm.value)
      this.authService.login(loginModel).subscribe(response=>{
        console.log("response");
        console.log(response);
        console.log(response.message)
        this.toastrService.success(response.message,"Başarılı");
        this.router.navigate([""]);
        localStorage.setItem("token",response.data.token);
        localStorage.setItem("email",this.loginForm.value.email);

      },responseError=>{
        this.toastrService.error(responseError.error);
      })
    }
  }

}
