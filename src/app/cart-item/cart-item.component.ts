import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {FullCartItem} from '../entities/cart';
import {CartService} from '../services/cart.service';

@Component({
  selector: 'app-cart-item',
  templateUrl: './cart-item.component.html',
  styleUrls: ['./cart-item.component.scss']
})
export class CartItemComponent implements OnInit {

  @Input() cartItemInput: FullCartItem;
  @Output() cartItemRemoved: EventEmitter<FullCartItem> = new EventEmitter<FullCartItem>();

  constructor(private cart: CartService) {
  }

  ngOnInit() {
  }

  emitCartItemRemoved() {
    this.cartItemRemoved.emit(this.cartItemInput);
  }

  updateQuantity() {
    this.cart.changeQuantity(this.cartItemInput.product._id, this.cartItemInput.quantity);
  }
}
