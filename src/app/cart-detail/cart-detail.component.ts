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
  cartItems: FullCartItem[] = [];
  cartSubscriptions: Subscription[] = [];
  isLoading: boolean;

  constructor(private snackBar: MatSnackBar, private cartService: CartService, private productService: ProductService) {
  }

  ngOnInit() {
    let isLoading$ = new Observable<boolean>(subscriber => {
      subscriber.next(true);

      setTimeout(() => {
        subscriber.next(false);
      }, 2000)
    });

    this.cartSubscriptions.push(isLoading$.subscribe((value) => {
      this.isLoading = value;
    }));

    this.cartSubscriptions.push(this.cartService.getContents().subscribe(cartItemsRes => {

      console.log(`Retrieved items:`);
      console.log(cartItemsRes);
      this.cartItems = [];

      cartItemsRes.forEach(cartItem => {

        console.log("Retrieving product for cart item:");
        console.log(cartItem);

        this.cartSubscriptions.push(this.productService.getProduct(cartItem._id).subscribe(product => {

          console.log("Added product to cart:");
          console.log(product);

          this.cartItems.push({product: product, quantity: cartItem.quantity});
        }));
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


