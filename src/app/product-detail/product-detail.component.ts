import {Component, OnInit} from '@angular/core';
import {Product} from '../entities/product';
import {ProductService} from '../services/product.service';
import {ActivatedRoute} from '@angular/router';
import {CartService} from '../services/cart.service';
import {Observable} from 'rxjs';
import {NgRedux} from "@angular-redux/store";
import {AppState} from "../store";

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss']
})
export class ProductDetailComponent implements OnInit {

  product: Observable<Product>;
  isAdmin$: Observable<boolean>;

  constructor(private ngRedux: NgRedux<AppState>, private productService: ProductService, private route: ActivatedRoute, private cartService: CartService) {
  }

  ngOnInit() {
    this.retrieveProducts();
    this.isAdmin$ = this.ngRedux.select(state => state.isAdmin);
  }

  async retrieveProducts() {
    // Get the id from the url
    const id = this.route.snapshot.paramMap.get('id');
    let products = <Observable<Product>>await this.productService.getProduct(id);
    console.log("found matching product:");
    this.product = products;
  }

  addToCart() {
    // this.cartService.addProduct(this.product._id);
  }
}
