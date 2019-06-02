import {Injectable} from '@angular/core';
import {TempDataService} from './temp-data.service';
import {CartItem, FullCartItem} from '../entities/cart';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private cartContents: CartItem[];

  constructor(private productService: TempDataService) {
    this.debugCart();
  }

  getContents(): FullCartItem[] {
    const fullCartContents: FullCartItem[] = [];
    this.cartContents.forEach(element => {
      fullCartContents.push({
        product: this.productService.findProduct(element._id),
        quantity: element.quantity
      });
    });
    return fullCartContents;
  }

  addProduct(id: string) {
    const index: number = this.cartContents.findIndex(item => item._id === id);
    if (index === -1) {
      this.cartContents.push({
        _id: id,
        quantity: 1
      });
    }
    console.log(this.cartContents);
  }

  removeProduct(id: string) {
    const index: number = this.cartContents.findIndex(item => item._id === id);
    if (index > -1) {
      this.cartContents.splice(index, 1);
    }
  }

  changeQuantity(id: string, quantity: number) {
    const product: CartItem = this.cartContents.find(item => item._id === id);
    product.quantity = quantity;
  }

  debugCart() {
    this.cartContents = [];
    this.cartContents.push({
      _id: '-1',
      quantity: 1
    });
    this.cartContents.push({
      _id: '-2',
      quantity: 10
    });
  }
}
