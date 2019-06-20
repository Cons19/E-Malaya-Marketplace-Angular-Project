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
  cartItems: CartObservable;

  constructor(private cartService: CartService, private productService: ProductService) {
  }

  ngOnInit() {
    // this.updateItems();
    this.cartService.getContents().subscribe(cartItemsRes => {

      console.log(`Retrieved items:`);
      console.log(cartItemsRes);

      this.cartItems = new CartObservable(subscriber => {

        cartItemsRes.forEach(cartItem => {

          console.log("Retrieving product for cart item:");
          console.log(cartItem);

          this.productService.getProduct(cartItem._id).subscribe(product => {

            console.log("Added product to cart:");
            console.log(product);

            this.cartItems.addCartItem({product: product, quantity: cartItem.quantity});

            subscriber.next(this.cartItems.getCart());
          });
        });
      });
    });
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

class CartObservable extends Observable<FullCartItem[]> {
  private fullCartItems: FullCartItem[] = [];

  addCartItem(cartItem: FullCartItem) {
    this.fullCartItems.push(cartItem);
  }

  getCart() {
    return this.fullCartItems;
  }
}


