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
        user: {
          _id: '1',
          firstName: 'Paul',
          lastName: 'Panaitescu',
          email: 'paul@gmail.com',
          password: 'pass',
          gender: Gender.Male,
          birthDate: new Date(2019, 0, 3),
          phone: 1234567899,
          address: 'CPH'
        },
        description: 'Descpription 1',
        price: {
          value: 100,
          currency: 'DKK'
        }
      },
      { 
        _id: '2', 
        name: 'Second Product',
        user: {
          _id: '2',
          firstName: 'Paul 2',
          lastName: 'Panaitescu',
          email: 'paul@gmail.com',
          password: 'pass',
          gender: Gender.Male,
          birthDate: new Date(2019, 0, 4),
          phone: 1234567899,
          address: 'CPH'
        },
        description: 'Descpription 1',
        price: {
          value: 400,
          currency: 'DKK'
        }
      },
      { 
        _id: '3', 
        name: 'Third Product',
        user: {
          _id: '2',
          firstName: 'Paul 2',
          lastName: 'Panaitescu',
          email: 'paul@gmail.com',
          password: 'pass',
          gender: Gender.Male,
          birthDate: new Date(2019, 0, 6),
          phone: 1234567899,
          address: 'CPH'
        },
        description: 'Descpription 1234',
        price: {
          value: 2300,
          currency: 'DKK'
        }
      },
      { 
        _id: '4', 
        name: 'Third Product 123',
        user: {
          _id: '2',
          firstName: 'Paul 2',
          lastName: 'Panaitescu',
          email: 'paul@gmail.com',
          password: 'pass',
          gender: Gender.Male,
          birthDate: new Date(2019, 1, 6),
          phone: 1234567899,
          address: 'CPH'
        },
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
      user: {
        _id: '1',
        firstName: 'Paul',
        lastName: 'Panaitescu',
        email: 'paul@gmail.com',
        password: 'pass',
        gender: Gender.Male,
        birthDate: new Date(2019, 0, 3),
        phone: 1234567899,
        address: 'CPH'
      },
      description: 'Descpription 1',
      price: {
        value: 100,
        currency: 'DKK'
      }
    }
  }
}
