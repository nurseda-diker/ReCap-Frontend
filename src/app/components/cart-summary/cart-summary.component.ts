import { ToastrService } from 'ngx-toastr';
import { CartService } from './../../services/cart.service';
import { Component, OnInit } from '@angular/core';
import { Car } from 'src/app/models/car';
import { CartItem } from 'src/app/models/cartItem';

@Component({
  selector: 'app-cart-summary',
  templateUrl: './cart-summary.component.html',
  styleUrls: ['./cart-summary.component.css'],
})
export class CartSummaryComponent implements OnInit {
  cartItems: CartItem[] = [];
  constructor(
    private cartService: CartService,
    private toastrService: ToastrService
  ) {}
  ngOnInit(): void {
    this.getCart();
  }

  getCart() {
    this.cartItems = this.cartService.list();
  }

  removeFromCart(car: Car) {
    this.cartService.removeFromCart(car);
    this.toastrService.error(car.carName + " sepetten silindi");
  }
}
