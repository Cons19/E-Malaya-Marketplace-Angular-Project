import { Injectable } from '@angular/core';
import { Product, CartItem } from '../entities/product';
import { ProductService } from './product.service';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private cartContents: CartItem[];

  constructor(private productService: ProductService) {
    this.cartContents = [];
   }

   
   getContents() : CartItem[] {
     let fullCartContents: CartItem[] = [];
     this.cartContents.forEach(element => {
       fullCartContents.push({
           item: this.productService.getProduct(element.item._id),
           quantity: element.quantity
          });
     });
     return fullCartContents;
   }
}
