import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CarComponent } from './components/car/car.component';
import { BrandComponent } from './components/brand/brand.component';
import { ColorComponent } from './components/color/color.component';
import { CarDetailComponent } from './components/car-detail/car-detail.component';
import { RentalAddComponent } from './components/rental-add/rental-add.component';
import { PaymentComponent } from './components/payment/payment.component';
import { PayComponent } from './components/pay/pay.component';


const routes: Routes = [
  {path:"",pathMatch:"full",component:CarComponent},
  {path:"brands",component:BrandComponent},
  {path:"cars/brand/:id",component:CarComponent},
  {path:"colors",component:ColorComponent},
  {path:"cars/color/:id",component:CarComponent},
  {path:"carDetails/:id",component:CarDetailComponent},
  {path:"rentals/add",component:RentalAddComponent},
  {path:"payment/pay",component:PayComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
