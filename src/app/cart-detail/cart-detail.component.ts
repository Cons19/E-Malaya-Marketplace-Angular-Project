import {Component, OnDestroy, OnInit} from '@angular/core';
import {CartService} from '../services/cart.service';
import {FullCartItem} from '../entities/cart';
import {Observable, Subscription} from 'rxjs';
import {ProductService} from '../services/product.service';
import {MatSnackBar} from '@angular/material';

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './cart-detail.component.html',
  styleUrls: ['./cart-detail.component.scss']
})
export class CartDetailComponent implements OnInit, OnDestroy {
  cartItems: CartObservable;
  cartSubscriptions: Subscription[];

  constructor(private snackBar: MatSnackBar, private cartService: CartService, private productService: ProductService) {
  }

  ngOnInit() {
    // this.updateItems();
    this.cartSubscriptions = [];
    this.cartSubscriptions.push(this.cartService.getContents().subscribe(cartItemsRes => {

      console.log(`Retrieved items:`);
      console.log(cartItemsRes);

      this.cartItems = new CartObservable(subscriber => {

        cartItemsRes.forEach(cartItem => {

          console.log("Retrieving product for cart item:");
          console.log(cartItem);

          this.cartSubscriptions.push(this.productService.getProduct(cartItem._id).subscribe(product => {

            console.log("Added product to cart:");
            console.log(product);

            this.cartItems.addCartItem({product: product, quantity: cartItem.quantity});

            subscriber.next(this.cartItems.getCart());
          }));
        });
      });
    }));
  };

  ngOnDestroy(): void {
    while(this.cartSubscriptions.length > 0) {
      let subscription = this.cartSubscriptions.pop();
      console.log("unsubscribing:");
      console.log(subscription);
      subscription.unsubscribe();
    }
  }

  handleItemRemoved(cartItem: FullCartItem) {
    this.cartService.removeProduct(cartItem.product._id)
      .then(() => {
        this.snackBar.open(`'${cartItem.product.name}' has been removed`, 'Dismiss', {duration: 2000});
      });
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


