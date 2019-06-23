import { ProductPipe } from './product.pipe';
import { TestBed } from '@angular/core/testing';

describe('ProductPipe', () => {
    let pipe = new ProductPipe();
    let products = [
        {_id: '1', name: 'name 1', description: 'desc 1', price: 150},
        {_id: '2', name: 'Title 2', description: 'desc 2', price: 180},
        {_id: '3', name: 'N 3', description: 'desc 3', price: 230},
        {_id: '4', name: 'A 4', description: 'desc 4', price: 450},
    ];

    console.log("inside describe");
    beforeEach(() => {
        console.log("inside before each");
        TestBed.configureTestingModule({});
    });
  
    it('should return a list with 4 products, if the input is an empty string', () => {
        // 1.Arrange  2.Act  3.Assert
        let result = pipe.transform(products, '');
        expect(result.length).toBe(4);
    });

    it('should return a list with 0 products, if the input is not found inside the title', () => {
        let result = pipe.transform(products, 'NO Title');
        // let result = pipe.transform(products, 'name');
        expect(result.length).toBe(0);
    });
});
