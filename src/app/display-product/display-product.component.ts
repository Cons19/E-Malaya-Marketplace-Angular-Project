import {Component, OnInit} from '@angular/core';
import {Product} from '../entities/product';
import {TempDataService} from '../services/temp-data.service';
import {ActivatedRoute} from '@angular/router';
import {CartService} from '../services/cart.service';

@Component({
  selector: 'app-display-product',
  templateUrl: './display-product.component.html',
  styleUrls: ['./display-product.component.scss']
})
export class DisplayProductComponent implements OnInit {

  product: Product;

  constructor(private tempData: TempDataService, private route: ActivatedRoute, private cartService: CartService) { }

  ngOnInit() {
    // this.quiz = this.tempData.getQuiz();

    // Get the id from the url
    const id = this.route.snapshot.paramMap.get('id');

    // Find the product object based on id
    this.product = this.tempData.findProduct(id);
    // Load the product in the html

  }

  addToCart() {
    this.cartService.addProduct(this.product._id);
  }
}
