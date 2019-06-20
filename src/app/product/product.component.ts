import {Component, Input, OnInit} from '@angular/core';
import {Product} from '../entities/product';
import {CartService} from '../services/cart.service';
import {NgRedux} from '@angular-redux/store';
import {AppState} from '../store';
import {ProductService} from '../services/product.service';
import {MatSnackBar} from '@angular/material';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {
  isAdmin: boolean;

  @Input() productInput: Product;

  constructor(private snackBar: MatSnackBar, private cartService: CartService, private ngRedux: NgRedux<AppState>, private productService: ProductService) {
  }

  ngOnInit() {
    this.ngRedux.select(state => state.products).subscribe(res => {
      this.isAdmin = res.isAdmin;
    });
  }

  addToCart() {
    this.cartService.addProduct(this.productInput._id)
      .then(() => {
        this.snackBar.open(`'${this.productInput.name}' has been added to cart.`, 'Dismiss', {duration: 2000});
      });
  }

  deleteProduct() {
    this.productService.deleteProduct(this.productInput._id)
      .then(() => {
        this.snackBar.open(`Product ${this.productInput.name} has been deleted`, 'Dismiss', {duration: 2000});
      });
  }
}
