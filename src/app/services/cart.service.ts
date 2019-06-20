import {Injectable} from '@angular/core';
import {ProductService} from './product.service';
import {CartItem} from '../entities/cart';
import {User} from '../entities/user';
import {Observable} from 'rxjs';
import {config} from '../app.config';
import {AngularFirestore} from '@angular/fire/firestore';

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

  getContents(): Observable<CartItem[]> {
    const id = this.user._id;
    console.log(`retrieving cart for user '${id}'`);
    return this.getDoc(id)
      .collection('products').valueChanges() as Observable<CartItem[]>;

    // cartDoc.subscribe(cartItems=>{
    //   cartItems.
    // });
    //
    // const fullCartContents: FullCartItem[] = [];
    // this.cartContents.forEach(element => {
    //   this.productService.getProduct(element._id).subscribe(productRes => {
    //
    //   });
    //   if (product != undefined) {
    //     fullCartContents.push({
    //       product: product,
    //       quantity: element.quantity
    //     });
    //   }
    // });
    // return fullCartContents;
  }

  addProduct(id: string) {
    // const index: number = this.cartContents.findIndex(item => item._id === id);
    // if (index === -1) {
    //   const product: Product = this.productService.getProduct(id);
    //   if (product != undefined) {
    //     this.cartContents.push({
    //       _id: id,
    //       quantity: 1
    //     });
    //     console.log("added product to cart: ");
    //     console.log(product);
    //   } else {
    //     throw new Error('Product does not exist with id ' + id);
    //   }
    // }
    // console.log(this.cartContents);
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
