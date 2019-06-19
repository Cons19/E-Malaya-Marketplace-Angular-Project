import {Injectable} from '@angular/core';
import {ProductService} from './product.service';
import {CartItem, FullCartItem} from '../entities/cart';
import {Product} from '../entities/product';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private cartContents: CartItem[];

  constructor(private productService: ProductService) {
    this.debugCart();
  }

  getContents(): FullCartItem[] {
    const fullCartContents: FullCartItem[] = [];
    this.cartContents.forEach(element => {
      fullCartContents.push({
        product: this.productService.getProduct(element._id),
        quantity: element.quantity
      });
    });
    return fullCartContents;
  }

  addProduct(id: string) {
    const index: number = this.cartContents.findIndex(item => item._id === id);
    if (index === -1) {
      const product: Product = this.productService.getProduct(id);
      if (product != undefined) {
        this.cartContents.push({
          _id: id,
          quantity: 1
        });
      } else {
        throw new Error('Product does not exist with id ' + id);
      }
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
    let products: Product[] = this.productService.getProducts();
    this.cartContents.push({
      _id: products[0]._id,
      quantity: 1
    });
    this.cartContents.push({
      _id: products[1]._id,
      quantity: 10
    });
  }
}
