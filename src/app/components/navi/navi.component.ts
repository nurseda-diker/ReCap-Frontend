import { LocalStorageService } from './../../services/local-storage.service';
import { Customer } from 'src/app/models/customer';
import { AuthService } from './../../services/auth.service';
import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/user';

@Component({
  selector: 'app-navi',
  templateUrl: './navi.component.html',
  styleUrls: ['./navi.component.css'],
})
export class NaviComponent implements OnInit {

  user:User;
  userLoginCheck:boolean;
  constructor(
    private authService: AuthService,
    private localStorageService: LocalStorageService
  ) {}
  ngOnInit(): void {
    this.loginCheck();
    
  }

  

  loginCheck(){
    this.userLoginCheck=this.authService.isAuthenticated();
    if(this.userLoginCheck){
      this.authService.getUserByMail(String(localStorage.getItem("email"))).subscribe(response=>{
        this.user=response.data;
        console.log(response)
      })
    }
  }

  






  

 



}
