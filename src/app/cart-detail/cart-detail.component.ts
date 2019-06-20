import {Component, OnInit} from '@angular/core';
import {CartService} from '../services/cart.service';
import {FullCartItem} from '../entities/cart';
import {Observable} from 'rxjs';
import {ProductService} from '../services/product.service';

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './cart-detail.component.html',
  styleUrls: ['./cart-detail.component.scss']
})
export class CartDetailComponent implements OnInit {
  cartItems: Observable<FullCartItem[]>;

  constructor(private cartService: CartService, private productService: ProductService) {
  }

  ngOnInit() {
    this.cartItems = this.cartService.getContents();
  }

  handleItemRemoved(cartItem: FullCartItem) {
    // const index: number = this.cartItems.findIndex(item => item === cartItem);
    // if (index > -1) {
    //   this.cartItems.splice(index, 1);
    // }
    // this.cart.removeProduct(cartItem.product._id);
    // console.log('removed ' + cartItem);
  }

  refresh() {
    this.updateItems();
  }

  reset() {
    // this.cart.debugCart();
    // this.updateItems();
  }

  private updateItems() {
    // this.cartItems = this.cart.getContents();
  }
}


