import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {FullCartItem} from '../entities/cart';
import {CartService} from '../services/cart.service';
import {FormBuilder, FormGroup} from "@angular/forms";

@Component({
  selector: 'app-cart-item',
  templateUrl: './cart-item.component.html',
  styleUrls: ['./cart-item.component.scss']
})
export class CartItemComponent implements OnInit {

  @Input() cartItemInput: FullCartItem;
  @Output() cartItemRemoved: EventEmitter<FullCartItem> = new EventEmitter<FullCartItem>();
  form: FormGroup;

  constructor(private fb: FormBuilder, private cart: CartService) {
  }

  ngOnInit() {
    this.form = this.fb.group({
      quantity: ['', []]
    })
  }

  updateQuantity() {
    this.cart.changeQuantity(this.cartItemInput.product._id, this.form.controls.quantity.value);
  }

  emitCartItemRemoved() {
    this.cartItemRemoved.emit(this.cartItemInput);
  }
}
