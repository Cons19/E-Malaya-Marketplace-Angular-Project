import {TestBed} from '@angular/core/testing';

import {CartService} from './cart.service';
import {FullCartItem} from '../entities/cart';
import {ProductService} from './product.service';
import {Product} from '../entities/product';

describe('CartService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should get all cart items', () => {
    const service: CartService = TestBed.get(CartService);
    const fullCartItems: FullCartItem[] = service.getContents();

    expect(fullCartItems).not.toBeNull();
  });

  it('should add a product', function() {
    const service: CartService = TestBed.get(CartService);
    const product: Product = TestBed.get(ProductService).getProducts()[0];

    service.addProduct(product._id);


    let content: FullCartItem = service.getContents().find(thatProduct => thatProduct.product === product);
    expect(content.product).toBe(product);
  });

  it('should not add an already added product', function() {
    const service: CartService = TestBed.get(CartService);
    const product: Product = TestBed.get(ProductService).getProducts()[0];

    service.addProduct(product._id);
    const oldSize: number = service.getContents().length;
    service.addProduct(product._id);
    const newSize: number = service.getContents().length;

    expect(newSize).toEqual(oldSize);
  });

  it('should not add an invalid product', function() {
    const service: CartService = TestBed.get(CartService);
    const product: Product = {
      _id: '999',
      name: 'test product',
      description: 'test description',
      price: {
        value: 99.99,
        currency: 'DKK'
      }
    };
    try {
      service.addProduct(product._id);
      fail();
    } catch (e) {
    }
  });

  it('should remove a product', function() {
    const service: CartService = TestBed.get(CartService);
    const product: Product = TestBed.get(ProductService).getProducts()[0];

    service.addProduct(product._id);


    let content: FullCartItem = service.getContents().find(thatProduct => thatProduct.product === product);
    expect(content.product).toBe(product);

    service.removeProduct(product._id);

    content = service.getContents().find(thatProduct => thatProduct.product === product);

    expect(content).toBeUndefined();
  });
});
