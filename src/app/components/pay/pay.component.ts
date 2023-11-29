import { CreditCardService } from './../../services/credit-card.service';
import { RentalService } from './../../services/rental.service';
import { ToastrService } from 'ngx-toastr';
import { PaymentService } from './../../services/payment.service';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Payment } from 'src/app/models/payment';
import { Rental } from 'src/app/models/rental';
import { CreditCard } from 'src/app/models/creditCard';

@Component({
  selector: 'app-pay',
  templateUrl: './pay.component.html',
  styleUrls: ['./pay.component.css']
})
export class PayComponent implements OnInit{

  payAddForm:FormGroup;
  cardOwner: string = '';
  cardNumber: string = '';
  expiryMonthAndYear: string = '';
  cvv: string = '';
  savedCard:boolean=false;
  rental:Rental;
  
  constructor(private formBuilder:FormBuilder,
    private paymentService:PaymentService,
    private toastrService:ToastrService,
    private rentalService:RentalService,
    private creditCardService:CreditCardService){}

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
      this.rental.customerId=Number(localStorage.getItem("userId"));
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


  addCard(){
    if(this.payAddForm.valid){
      let cardModel:CreditCard=Object.assign({},this.payAddForm.value);
      console.log(cardModel);
      this.paymentService.addCard(cardModel).subscribe(response=>{
        this.toastrService.success("Kart başarıyla kaydedildi");
      },responseError=>{
        console.log(responseError);
        if(responseError.error.message){
          this.toastrService.error(responseError.error.message,"Doğrulama hatası");
        }
      }
      )
    }
  }

  



}
