import { UserService } from './../../services/user.service';
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
  user: User;
  userLoginCheck: boolean;
  
  constructor(
    private authService: AuthService,
    private localStorageService: LocalStorageService,
    private userService: UserService
  ) {}
  ngOnInit(): void {
   
  }

  isAuth() {
    return this.authService.isAuthenticated();
  }

  getFullName() {
    return this.authService.getFullName();
  }

  getUserByEmail(){
    this.userService.getUserByMail(localStorage.getItem("email")).subscribe((response)=>{
      this.user = response.data
    })
}

  logOut(){
    this.localStorageService.clean();
    location.reload();
  }

  
}
