import { PaymentService } from './../../services/payment.service';
import { Payment } from './../../models/payment';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css']
})
export class PaymentComponent  implements OnInit{
  
  payments:Payment[]=[];
  dataLoaded=false;
  constructor(private paymentService:PaymentService){}
  
  ngOnInit(): void {
    this.getPayments();
  }

  getPayments(){
    this.paymentService.getPayments().subscribe((response)=>{
      this.payments=response.data;
      this.dataLoaded=true;
    })
  }


  



}
