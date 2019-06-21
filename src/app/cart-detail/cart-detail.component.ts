import {Component, OnInit} from '@angular/core';
import {CartService} from '../services/cart.service';
import {FullCartItem} from '../entities/cart';
import {Observable} from 'rxjs';
import {ProductService} from '../services/product.service';
import {MatSnackBar} from '@angular/material';

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './cart-detail.component.html',
  styleUrls: ['./cart-detail.component.scss']
})
export class CartDetailComponent implements OnInit {
  cartItems: Observable<FullCartItem[]>;

  constructor(private snackBar: MatSnackBar, private cartService: CartService, private productService: ProductService) {
  }

  ngOnInit() {
    this.refreshList();
  }

  private refreshList() {
    this.cartItems = this.cartService.getContents();
  }

  handleItemRemoved(cartItem: FullCartItem) {
    this.cartService.removeProduct(cartItem.product._id)
      .then(() => {
        this.snackBar.open(`'${cartItem.product.name}' has been removed`, 'Dismiss', {duration: 2000});
      });
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


