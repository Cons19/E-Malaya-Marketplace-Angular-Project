import {Pipe, PipeTransform} from '@angular/core';
import {Product} from './entities/product';
import {DocumentChangeAction} from '@angular/fire/firestore';

@Pipe({
  name: 'productPipe' //used when I apply the pipe(filter)
})
export class ProductPipe implements PipeTransform {

  transform(products: DocumentChangeAction<Product>[], search?: string): any {
    console.log(products);
    console.log(search);
    if (search === undefined) {
      return products;
    }

    return products.filter(product =>
      product.payload.doc.data()
        .name.toLowerCase()
        .includes(search.toLowerCase()));
  }

}
