import {Component, Input, OnInit} from '@angular/core';
import {Product} from '../entities/product';
import {CartService} from '../services/cart.service';
import { NgRedux } from '@angular-redux/store';
import { AppState } from '../store';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {
  isAdmin: boolean;

  @Input() productInput: Product;

  constructor(private cartService: CartService, private ngRedux: NgRedux<AppState>) {
  }

  ngOnInit() {
    // check if admin then show buttons otherwise not
    this.ngRedux.select(state => state.products).subscribe(res => {
      this.isAdmin = res.isAdmin;   
    })
  }

  addToCart() {
    this.cartService.addProduct(this.productInput._id);
  }
}
