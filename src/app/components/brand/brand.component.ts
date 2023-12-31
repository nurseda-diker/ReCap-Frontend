import { BrandService } from './../../services/brand.service';
import { Component, OnInit } from '@angular/core';
import { Brand } from 'src/app/models/brand';

@Component({
  selector: 'app-brand',
  templateUrl: './brand.component.html',
  styleUrls: ['./brand.component.css'],
})
export class BrandComponent implements OnInit {
  apiUrl = 'https://localhost:7216/api/brands/getall';
  brands: Brand[] = [];
  currentBrand:Brand;
  dataLoaded=false;
  filterText="";
  selectedText="";
  constructor(private brandService: BrandService) {}

  ngOnInit(): void {
    this.getBrands();
  }

  getBrands() {
    this.brandService.getBrands().subscribe((response) => {
      this.brands = response.data;
      this.dataLoaded=true;
    });
  }

  setCurrentBrand(brand:Brand){
    this.currentBrand=brand;
  }

  getCurrentBrandClass(brand:Brand){
    if(this.currentBrand==brand){
      return "list-group-item active"
    }
    else{
      return "list-group-item"
    }
  }

  getAllBrandClass(){
    if(!this.currentBrand){
      return "list-group-item active"
    }
    else{
      return "list-group-item"
    }
  }

  cleanCurrentBrand(){
    this.currentBrand=null;
  }




}
