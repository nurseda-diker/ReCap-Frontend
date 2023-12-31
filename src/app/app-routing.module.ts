import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CarComponent } from './components/car/car.component';
import { BrandComponent } from './components/brand/brand.component';
import { ColorComponent } from './components/color/color.component';
import { CarDetailComponent } from './components/car-detail/car-detail.component';
import { RentalAddComponent } from './components/rental-add/rental-add.component';
import { PayComponent } from './components/pay/pay.component';
import { BrandAddComponent } from './components/brand-add/brand-add.component';
import { ColorAddComponent } from './components/color-add/color-add.component';
import { CarAddComponent } from './components/car-add/car-add.component';
import { BrandUpdateComponent } from './components/brand-update/brand-update.component';
import { ColorUpdateComponent } from './components/color-update/color-update.component';
import { CarUpdateComponent } from './components/car-update/car-update.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { LoginGuard } from './guards/login.guard';
import { UserComponent } from './components/user/user.component';
import { UserUpdateComponent } from './components/user-update/user-update.component';


const routes: Routes = [
  {path:"",pathMatch:"full",component:CarComponent},
  {path:"brands",component:BrandComponent},
  {path:"brands/update/:id",component:BrandUpdateComponent},
  {path:"cars/brand/:id",component:CarComponent},
  {path:"colors",component:ColorComponent},
  {path:"cars/color/:id",component:CarComponent},
  {path:"carDetails/:id",component:CarDetailComponent},
  {path:"rentals/add",component:RentalAddComponent,canActivate:[LoginGuard]},
  {path:"payment/pay",component:PayComponent},
  {path:"brands/add",component:BrandAddComponent},
  {path:"colors/add",component:ColorAddComponent},
  {path:"colors/update/:id",component:ColorUpdateComponent},
  {path:"cars/add",component:CarAddComponent},
  {path:"cars/update/:carId",component:CarUpdateComponent},
  {path:"login",component:LoginComponent},
  {path:"register",component:RegisterComponent},
  {path:"profile",component:UserComponent},
  {path:"users/update/:id",component:UserUpdateComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
