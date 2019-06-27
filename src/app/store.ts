import {routerReducer} from '@angular-redux/router';
import {combineReducers} from 'redux';
import {productReducer} from './product.reducer';

export class ProductState {
  isLoggedIn: boolean;
  isAdmin: boolean;
}
export class AppState {
  products?: ProductState;
}
export const rootReducer = combineReducers<AppState>({
    products: productReducer,
    router: routerReducer
} as any);
