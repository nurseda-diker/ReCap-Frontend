import { LocalStorageService } from './../../services/local-storage.service';
import { User } from 'src/app/models/user';
import { UserService } from './../../services/user.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css'],
})
export class UserComponent implements OnInit {
  users: User[]=[];
  user:User;
  currentUserId:number;
  constructor(private userService: UserService,private localStorageService:LocalStorageService) {}
  ngOnInit(): void {
    this.getUser(this.localStorageService.get("email"));
    this.getUser(this.localStorageService.get("password"));
  }

   getUser(email:string){
      this.userService.getUserByMail(email).subscribe(response=>{
      this.user=response.data;
      console.log("çalışıyor musun")
      console.log(this.user)
    })
   }


  



}
