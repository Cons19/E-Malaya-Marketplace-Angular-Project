import {Injectable} from '@angular/core';
import {CartItem} from '../entities/cart';
import {User} from '../entities/user';
import {Observable} from 'rxjs';
import {config} from '../app.config';
import {AngularFirestore} from '@angular/fire/firestore';

const productsPath = 'products';
@Injectable({
  providedIn: 'root'
})
export class CartService {
  private user: User = {
    _id: 'QD5BMv62Nj895tuuUQ6L',
    firstName: 'John',
    lastName: 'Doe',
    email: 'johndoe@email.com',
    password: 'placebo'
  };

  constructor(private db: AngularFirestore) {
  }

  getContents(): Observable<CartItem[]> {
    console.log(`retrieving cart for user '${this.user._id}'`);
    return this.getDoc()
      .collection(productsPath).valueChanges() as Observable<CartItem[]>;
  }

  addProduct(id: string): Promise<void> {
    let cartDoc = this.getDoc().collection(productsPath).doc<CartItem>(id);
    const data: CartItem = {_id: id, quantity: 1};
    return cartDoc.set(data);
  }

  removeProduct(id: string): Promise<void> {
    return this.getDoc().collection(productsPath).doc<CartItem>(id).delete();
  }

  changeQuantity(id: string, quantity: number) {
    const data: CartItem = {_id: id, quantity: quantity};
    return this.getDoc()
      .collection(productsPath)
      .doc<CartItem>(id)
      .update(data);
  }

  private getDoc() {
    return this.db.doc(`${config.shopping_carts_endpoint}/${this.user._id}`);
  }
}
