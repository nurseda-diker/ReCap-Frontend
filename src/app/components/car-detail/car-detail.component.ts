import { Component, OnInit } from '@angular/core';
import { CarDetail } from 'src/app/models/carDetail';

@Component({
  selector: 'app-car-detail',
  templateUrl: './car-detail.component.html',
  styleUrls: ['./car-detail.component.css']
})
export class CarDetailComponent implements OnInit{

  cars:CarDetail[]=[]

  constructor(){}
  ngOnInit(): void {
    
  }

  


}
