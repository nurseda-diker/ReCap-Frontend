import { ToastrService } from 'ngx-toastr';
import { PaymentService } from './../../services/payment.service';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Payment } from 'src/app/models/payment';

@Component({
  selector: 'app-pay',
  templateUrl: './pay.component.html',
  styleUrls: ['./pay.component.css']
})
export class PayComponent implements OnInit{

  payAddForm:FormGroup;
  constructor(private formBuilder:FormBuilder,
    private paymentService:PaymentService,
    private toastrService:ToastrService){}

  ngOnInit(): void {
    this.createPayAddForm();
  }

  createPayAddForm(){
    this.payAddForm=this.formBuilder.group({
      fullName:["",Validators.required],
      cardNumber:["",Validators.required],
      cvv:["",Validators.required],
      month:["",Validators.required],
      year:["",Validators.required]
    })
  }

  add(){
    if(this.payAddForm.valid){
      let pay:Payment=Object.assign({},this.payAddForm.value);
      this.paymentService.addPayments(pay).subscribe(response=>{
        this.toastrService.success(response.message,"Ödeme başarılı!");
      },
      responseError=>{
        console.log(responseError);
        if(responseError.error.message){
          this.toastrService.error(responseError.error.message,"Doğrulama hatası");
        }
      })
    }
    else{
      this.toastrService.error("Lütfen tüm alanları doldurun.","Hata!");
    }
  }



}
