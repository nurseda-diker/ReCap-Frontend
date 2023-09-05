import { ToastrService } from 'ngx-toastr';
import { RentalService } from './../../services/rental.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Rental } from 'src/app/models/rental';



@Component({
  selector: 'app-rental-add',
  templateUrl: './rental-add.component.html',
  styleUrls: ['./rental-add.component.css'],
})
export class RentalAddComponent implements OnInit {

  rentalAddForm:FormGroup;
  constructor(
    private rentalService: RentalService,
    private toastrService: ToastrService,
    private router:Router,
    private formBuilder:FormBuilder
  ) {}
  ngOnInit(): void {
    this.createRentalAddForm();
  }

  createRentalAddForm(){
    this.rentalAddForm=this.formBuilder.group({
      carId:["",Validators.required],
      rentDate:["",Validators.required],
      returnDate:["",Validators.required],
      customerId:["",Validators.required]
    })
  }

  add(){
    if(this.rentalAddForm.valid){
      let rental:Rental=Object.assign({},this.rentalAddForm.value);
      this.rentalService.addRental(rental).subscribe((response)=>{
        this.toastrService.success(response.message,"Başarılı!Ödeme sayfasına yönlendiriliyorsunuz");
        this.router.navigate(['/payment/pay'])
      },
      responseError=>{
        console.log(responseError.error.message);
        
        if(responseError){
          this.toastrService.error(responseError.error.message,"Doğrulama hatası");
        }

      }

      )
    }else{
      
      this.toastrService.error("Lütfen tüm alanları doldurunuz!","Hata!");
    }
  }




}
