import {Injectable} from '@angular/core';
import {ProductService} from './product.service';
import {CartItem, FullCartItem} from '../entities/cart';
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

  constructor(private db: AngularFirestore, private productService: ProductService) {
  }

  getContents(): Observable<FullCartItem[]> {
    const userId = this.user._id;

    const cartObservable = new CartObservable(subscriber => {
      console.log(`retrieving cart for user '${userId}'`);
      (this.getDoc(userId).collection(productsPath).valueChanges() as Observable<CartItem[]>)
        .subscribe(cartItemsRes => {

          console.log(`Retrieved items:`);
          console.log(cartItemsRes);

          cartItemsRes.forEach(cartItem => {

            console.log('Retrieving product for cart item:');
            console.log(cartItem);

            this.productService.getProduct(cartItem._id).subscribe(product => {

              console.log('Added product to cart:');
              console.log(product);

              cartObservable.addCartItem({product: product, quantity: cartItem.quantity});

              subscriber.next(cartObservable.getCart());
            });
          });
        });
    });
    return cartObservable;
  }

  addProduct(id: string): Promise<void> {
    const userId = this.user._id;

    let cartDoc = this.getDoc(userId).collection(productsPath).doc<CartItem>(id);
    const data: CartItem = {_id: id, quantity: 1};
    return cartDoc.set(data);
  }

  removeProduct(id: string) {
    const index: number = this.cartContents.findIndex(item => item._id === id);
    if (index > -1) {
      this.cartContents.splice(index, 1);
    }
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

class CartObservable extends Observable<FullCartItem[]> {
  private fullCartItems: FullCartItem[] = [];

  addCartItem(cartItem: FullCartItem) {
    this.fullCartItems.push(cartItem);
  }

  getCart() {
    return this.fullCartItems;
  }
}
