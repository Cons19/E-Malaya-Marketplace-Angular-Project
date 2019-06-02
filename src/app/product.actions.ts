import { Injectable } from '@angular/core';
import { NgRedux } from '@angular-redux/store';
import { AppState } from './store';
import { Product } from './entities/product';

@Injectable({ providedIn: 'root'})
export class ProductActions {
constructor (private ngRedux: NgRedux<AppState>) {} 

  static LOG_IN: string = 'LOG_IN'; 
  static CREATE_PRODUCT: string = 'CREATE_PRODUCT'; 
  
  createProduct(product: Product):void {
    this.ngRedux.dispatch({
      type: ProductActions.CREATE_PRODUCT,
      payload: product
    }); 
  }
  setLoggedIn(isLoggedIn: boolean): void {
    console.log(isLoggedIn);
    this.ngRedux.dispatch({
      type: ProductActions.LOG_IN,
      payload: isLoggedIn
    })
  }
}
