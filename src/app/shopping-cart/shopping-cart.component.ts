import { Component, OnInit } from '@angular/core';
import { CartService } from '../services/cart.service';
import { Product, CartItem } from '../entities/product';

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.scss']
})
export class ShoppingCartComponent implements OnInit {
  products: CartItem[];

  constructor(private cart: CartService) { }

  ngOnInit() {
    this.products = this.cart.getContents();
  }
}
