import { Injectable } from '@angular/core';
import { Product } from '../entities/product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  getProduct(_id: string): Product {
    throw new Error("Method not implemented.");
  }

  constructor() { }
}
