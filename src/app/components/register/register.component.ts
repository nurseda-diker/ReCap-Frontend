import { ToastrService } from 'ngx-toastr';
import { AuthService } from './../../services/auth.service';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  registerForm:FormGroup;
  constructor(private formBuilder:FormBuilder,private authService:AuthService,private toastrService:ToastrService,private router:Router){}
  ngOnInit(): void {
    this.createRegisterForm();
  }

  createRegisterForm(){
    this.registerForm=this.formBuilder.group({
      firstName:["",Validators.required],
      lastName:["",Validators.required],
      email:["",Validators.required],
      password:["",Validators.required]
    })
  }

  register(){
    let registerModel=Object.assign({},this.registerForm.value);
    this.authService.register(registerModel).subscribe(response=>{
      console.log(registerModel)
      this.toastrService.success("Kayıt başarılı");
      this.toastrService.info("Giriş sayfasına yönlendiriliyorsunuz")
      this.router.navigate(["login"]);

    },responseError=>{
      this.toastrService.error(responseError.error);
    })
  }

}
