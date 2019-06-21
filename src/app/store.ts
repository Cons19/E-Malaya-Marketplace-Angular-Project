import {routerReducer} from '@angular-redux/router';
import {combineReducers} from 'redux';
import {appReducer} from './app.reducer';

export class AppState {
  isLoggedIn: boolean;
  isAdmin: boolean;
}

export const rootReducer = combineReducers<AppState>({
  products: appReducer,
  router: routerReducer
} as any);
