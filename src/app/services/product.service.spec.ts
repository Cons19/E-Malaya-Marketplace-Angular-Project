import {TestBed} from '@angular/core/testing';

import {ProductService} from './product.service';
import {Product} from '../entities/product';

describe('ProductService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should get all products', function() {
    const service: ProductService = TestBed.get(ProductService);
    const products: Product[] = service.getProducts();

    expect(products).not.toBeNull();
  });

  it('should get a product', function() {
    const service: ProductService = TestBed.get(ProductService);
    const products: Product[] = service.getProducts();

    expect(service.getProduct(products[0]._id)).toBe(products[0]);
  });

  it('should add a product', function() {
    const service: ProductService = TestBed.get(ProductService);
    const product: Product = {
      _id: '999',
      name: 'test product',
      description: 'test description',
      price: {
        value: 99.99,
        currency: 'DKK'
      }
    };

    service.addProduct(product);

    expect(service.getProduct(product._id)).toBe(product);
  });

  it('should update a product', function() {
    const service: ProductService = TestBed.get(ProductService);

    const product: Product = service.getProducts()[0];
    product.name = "test product modified";

    service.updateProduct(product);

    expect(service.getProducts()[0]).toBe(product);
  });

  it('should throw exception when updating invalid product', function() {
    const service: ProductService = TestBed.get(ProductService);

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
      service.updateProduct(product);
      fail("RangeError not thrown");
    } catch (e) {
    }
  });
});
