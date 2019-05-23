import { Pipe, PipeTransform } from '@angular/core';
import { Product } from './entities/product';

@Pipe({
  name: 'productPipe' //used when I apply the pipe(filter)
})
export class ProductPipe implements PipeTransform {

  transform(products: Product[], search?: any): any {
    console.log(products);
    console.log(search);
    if (search === undefined) {
      return products;
    }
    return products.filter(product => product.name.indexOf(search) !== -1);
  }

}
