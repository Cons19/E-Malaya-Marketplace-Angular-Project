import {Component, Input, OnInit} from '@angular/core';
import {Product} from '../entities/product';
import {CartService} from '../services/cart.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {

  @Input() productInput: Product;

  constructor(private cartService: CartService) {
  }

  ngOnInit() {
  }

  addToCart() {
    this.cartService.addProduct(this.productInput._id);
  }
}
