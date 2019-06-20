import {Component, OnInit} from '@angular/core';
import {Product} from '../entities/product';
import {ProductService} from '../services/product.service';
import {ActivatedRoute} from '@angular/router';
import {CartService} from '../services/cart.service';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss']
})
export class ProductDetailComponent implements OnInit {

  product: Observable<Product>;

  constructor(private productService: ProductService, private route: ActivatedRoute, private cartService: CartService) { }

  ngOnInit() {

    this.retrieveProduct();

    // Find the product object based on id
    // this.productService.getProduct(id).then((result)=>{
    //   this.product =
    // });


  }

  async retrieveProduct() {
    // Get the id from the url
    const id = this.route.snapshot.paramMap.get('id');
    let products = <Observable<Product>>await this.productService.getProduct(id);
    console.log("found matching product:");
    console.log(products);
    this.product = products;
  }

  addToCart() {
    // this.cartService.addProduct(this.product._id);
  }
}
