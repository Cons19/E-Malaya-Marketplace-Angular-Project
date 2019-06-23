import {Injectable} from '@angular/core';
import {Product} from '../entities/product';
import {AngularFirestore} from '@angular/fire/firestore';
import {config} from '../app.config';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  constructor(private db: AngularFirestore) {
  }

  addProduct(product: Product): Promise<void> {
    const id = this.db.createId();
    let productDoc = this.getProductDoc(id);

    product._id = id;
    console.log(product);
    return productDoc.set(product);
  }

  getProduct(id: string): Observable<Product> {
    console.log('Retrieving product with id ' + id);
    let productDoc = this.getProductDoc(id);

    return productDoc.valueChanges();
  }

  getProducts(): Observable<Product[]> {
    return this.db
      .collection(config.products_endpoint)
      .valueChanges() as Observable<Product[]>;
  }

  updateProduct(product: Product): Promise<void> {
    console.log('updating product');
    console.log(product);

    let productDoc = this.getProductDoc(product._id);

    return productDoc.update(product);
  }

  deleteProduct(id: string): Promise<void> {
      return this.getProductDoc(id).delete();
  }

  private getProductDoc(id: string) {
    return this.db.doc <Product>(`${config.products_endpoint}/${id}`);
  }
}
