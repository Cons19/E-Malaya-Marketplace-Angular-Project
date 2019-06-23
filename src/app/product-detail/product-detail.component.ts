import {Component, OnInit} from '@angular/core';
import {Product} from '../entities/product';
import {ProductService} from '../services/product.service';
import {ActivatedRoute} from '@angular/router';
import {CartService} from '../services/cart.service';
import {Observable} from 'rxjs';
import {NgRedux} from "@angular-redux/store";
import {AppState} from "../store";
import {MatSnackBar} from "@angular/material";

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss']
})
export class ProductDetailComponent implements OnInit {

  product$: Observable<Product>;
  isAdmin$: Observable<boolean>;
  isLoading$: Observable<boolean>;

  constructor(private snackBar: MatSnackBar, private ngRedux: NgRedux<AppState>, private productService: ProductService, private route: ActivatedRoute, private cartService: CartService) {
  }

  ngOnInit() {
    this.isAdmin$ = this.ngRedux.select(state => state.products.isAdmin);
    this.isLoading$ = new Observable(subscriber => {
      subscriber.next(true);

      this.retrieveProduct();

      setTimeout(()=>{
        subscriber.next(false);
      }, 2000)
    });
  }

  async retrieveProduct() {
    // Get the id from the url
    const id = this.route.snapshot.paramMap.get('id');
    let product = <Observable<Product>>await this.productService.getProduct(id);
    console.log("found matching product:");
    console.log(product);
    this.product$ = product;
  }

  addToCart(id: string, name: string) {
    this.cartService.addProduct(id)
      .then(() => {
        this.snackBar.open(`'${name}' has been added to cart.`, 'Dismiss', {duration: 2000});
      });
  }
}
