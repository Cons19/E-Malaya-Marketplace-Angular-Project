import { Component, OnInit } from '@angular/core';
import { CartService } from '../services/cart.service';
import { FullCartItem } from '../entities/product';

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.scss']
})
export class ShoppingCartComponent implements OnInit {
  cartItems: FullCartItem[];

  constructor(private cart: CartService) { }

  ngOnInit() {
    this.cartItems = this.cart.getContents();
  }
}
