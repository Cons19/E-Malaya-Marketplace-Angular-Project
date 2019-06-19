import {Component, OnInit} from '@angular/core';
import {Product} from '../entities/product';
import {ProductService} from '../services/product.service';
import {ActivatedRoute} from '@angular/router';
import {CartService} from '../services/cart.service';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss']
})
export class ProductDetailComponent implements OnInit {

  product: Product;

  constructor(private tempData: ProductService, private route: ActivatedRoute, private cartService: CartService) { }

  ngOnInit() {
    // this.quiz = this.tempData.getQuiz();

    // Get the id from the url
    const id = this.route.snapshot.paramMap.get('id');

    // Find the product object based on id
    this.product = this.tempData.getProduct(id);
    // Load the product in the html

  }

  addToCart() {
    this.cartService.addProduct(this.product._id);
  }
}
