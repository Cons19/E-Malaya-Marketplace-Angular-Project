import { Injectable } from '@angular/core';
import { Product } from '../entities/product';
import { Gender } from '../entities/user';

@Injectable({
  providedIn: 'root'
})
export class TempDataService {

  products: Product[];

  constructor() {
    this.products = this.getProducts();  
  }

  saveProduct(product: Product): void {
    this.products.push(product);
    console.log(this.products);
  }

  findProduct(searchForId: string) : Product {
    return this.products.find(product => product._id === searchForId);
  }

  getProducts() : Product[] {
    return [
      { 
        _id: '1', 
        name: 'First Product',
        description: 'Descpription 1',
        price: {
          value: 100,
          currency: 'DKK'
        }
      },
      { 
        _id: '2', 
        name: 'Second Product',
        description: 'Descpription 1',
        price: {
          value: 400,
          currency: 'DKK'
        }
      },
      { 
        _id: '3', 
        name: 'Third Product',
        description: 'Descpription 1234',
        price: {
          value: 2300,
          currency: 'DKK'
        }
      },
      { 
        _id: '4', 
        name: 'Third Product 123',
        description: 'Descpription 123412312 3123 1  f8fsdf sasdfsd gg dsg sdg sdawe gfrs8dfds ',
        price: {
          value: 2300,
          currency: 'DKK'
        }
      },
    ];
  }

  getProduct() : Product {
    return { 
      _id: '1', 
      name: 'Title 1',
      description: 'Descpription 1',
      price: {
        value: 100,
        currency: 'DKK'
      }
    }
  }
}
