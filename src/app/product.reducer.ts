import {ProductState} from './store';
import {tassign} from 'tassign';
import {ProductActions} from './product.actions';

const INITIAL_STATE: ProductState = {isLoggedIn: false, isAdmin: false};

export function productReducer(state: ProductState = INITIAL_STATE, action: any) {
  switch (action.type) {
    case ProductActions.LOG_IN:
      return tassign(state, {isLoggedIn: action.payload});
    case ProductActions.ADMIN:
      return tassign(state, {isAdmin: action.payload});
    default:
      return state;
  }
}
