import {Component, Input, OnInit} from '@angular/core';
import {Product} from '../entities/product';
import {CartService} from '../services/cart.service';
import {NgRedux} from '@angular-redux/store';
import {AppState} from '../store';
import {ProductService} from '../services/product.service';
import {MatSnackBar} from '@angular/material';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {
  isAdmin$: Observable<boolean>;

  @Input() productInput: Product;

  constructor(private snackBar: MatSnackBar, private cartService: CartService, private ngRedux: NgRedux<AppState>, private productService: ProductService) {
  }

  ngOnInit() {
    this.isAdmin$ = this.ngRedux.select(state => state.isAdmin)
  }

  addToCart() {
    this.cartService.addProduct(this.productInput._id);
  }

  deleteProduct() {
    this.productService.deleteProduct(this.productInput._id)
      .then(() => {
        this.snackBar.open(`Product ${this.productInput.name} has been deleted`, 'Dismiss', {duration: 2000});
      });
  }
}
