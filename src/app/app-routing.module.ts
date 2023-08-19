import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CarComponent } from './components/car/car.component';
import { BrandComponent } from './components/brand/brand.component';

const routes: Routes = [
  {path:"",pathMatch:"full",component:CarComponent},
  {path:"brands",component:BrandComponent},
  {path:"cars/brand/:id",component:CarComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
