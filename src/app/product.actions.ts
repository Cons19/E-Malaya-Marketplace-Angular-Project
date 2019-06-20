import {Injectable} from '@angular/core';
import {NgRedux} from '@angular-redux/store';
import {AppState} from './store';

@Injectable({ providedIn: 'root'})
export class ProductActions {
constructor (private ngRedux: NgRedux<AppState>) {} 

  static LOG_IN: string = 'LOG_IN'; 
  static ADMIN: string = 'ADMIN'; 
  // static CREATE_PRODUCT: string = 'CREATE_PRODUCT';
  
  // createProduct(product: Product):void {
  //   this.ngRedux.dispatch({
  //     type: ProductActions.CREATE_PRODUCT,
  //     payload: product
  //   });
  // }
  setLoggedIn(isLoggedIn: boolean): void {
    console.log(isLoggedIn);
    this.ngRedux.dispatch({
      type: ProductActions.LOG_IN,
      payload: isLoggedIn
    })
  }

  setAdmin(isAdmin: boolean): void {
    console.log(isAdmin);
    this.ngRedux.dispatch({
      type: ProductActions.ADMIN,
      payload: isAdmin
    })
  }
}
