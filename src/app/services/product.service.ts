import {Injectable} from '@angular/core';
import {Product} from '../entities/product';
import {v4 as uuid} from 'uuid';
import {AngularFirestore} from '@angular/fire/firestore';
import {config} from '../app.config';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  products: Product[];

  constructor(private db: AngularFirestore) {
  }

  addProduct(product: Product) {
    product._id = uuid();
    console.log(this.products);
    return this.db
        .collection(config.products_endpoint)
        .add(product);
  }

  getProduct(id: string): Observable<Product[]>{
    console.log("Retrieving product with id " + id);
    return this.db
      .collection(config.products_endpoint, ref => ref.where('_id', '==', id))
      .valueChanges() as Observable<Product[]>;
  }

  getProducts(): Observable<Product[]>{
    return this.db
      .collection(config.products_endpoint)
      .valueChanges() as Observable<Product[]>;
  }

  updateProduct(product: Product) {
    const index: number = this.products.findIndex(thatProduct => thatProduct._id === product._id);
    if (index > -1) {
      this.products.splice(index, 1, product);
    } else {
      throw new RangeError('Index out of range: ' + index);
    }
  }
}
