import { Injectable } from '@angular/core';
import { CartItem, FullCartItem } from '../entities/product';
import { TempDataService } from './temp-data.service';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private cartContents: CartItem[];

  constructor(private productService: TempDataService) {
    this.cartContents = [];
    this.cartContents.push({
      _id: '1',
      quantity: 1
    })
    this.cartContents.push({
      _id: '2',
      quantity: 10
    })
   }

   getContents() : FullCartItem[] {
     let fullCartContents: FullCartItem[] = [];
     this.cartContents.forEach(element => {
       fullCartContents.push({
           item: this.productService.findProduct(element._id),
           quantity: element.quantity
          });
     });
     return fullCartContents;
   }

  addProduct(id: string) {
    this.cartContents.push({
      _id: id,
      quantity: 1
    })
  }
}
