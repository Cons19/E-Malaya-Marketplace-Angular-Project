import {Injectable} from '@angular/core';
import {ProductService} from './product.service';
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
  private cartContents: CartItem[];

  constructor(private db: AngularFirestore) {
  }

  getContents(): Observable<CartItem[]> {
    const id = this.user._id;
    console.log(`retrieving cart for user '${id}'`);
    return this.getDoc(id)
      .collection(productsPath).valueChanges() as Observable<CartItem[]>;
  }

  addProduct(id: string): Promise<void> {
    const userId = this.user._id;

    let cartDoc = this.getDoc(userId).collection(productsPath).doc<CartItem>(id);
    const data: CartItem = {_id: id, quantity: 1};
    return cartDoc.set(data);
  }

  removeProduct(id: string): Promise<void> {
    const userId = this.user._id;

    return this.getDoc(userId).collection(productsPath).doc<CartItem>(id).delete();
  }

  changeQuantity(id: string, quantity: number) {
    const product: CartItem = this.cartContents.find(item => item._id === id);
    product.quantity = quantity;
  }

  private getDoc(id) {
    return this.db
      .doc(`${config.shopping_carts_endpoint}/${id}`);
  }
}
