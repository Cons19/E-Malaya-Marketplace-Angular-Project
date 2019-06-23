import {ProductState} from './store';
import {tassign} from 'tassign';
import {ProductActions} from './product.actions';

// const productService = new ProductService();
const INITIAL_STATE: ProductState = {isLoggedIn: false, isAdmin: false
  // , products: productService.products
};

export function productReducer(state: ProductState = INITIAL_STATE, action: any) {
  switch (action.type) {
//   case ProductActions.GET_PRODUCTS_LOADING:
//     return tassign(state, { isLoading: true });

//   case ProductActions.GET_PRODUCTS_SUCCESS:
//     return tassign(state, {isLoading: false, products: action.payload });

//   case ProductActions.GET_PRODUCTS_FAILED:
//     return tassign(state, {isLoading: false});

    // case ProductActions.CREATE_PRODUCT:
    //   return tassign(state, {products: [...state.products, action.payload]});

//    case ProductActions.UPDATE_PRODUCT:
//     return 

//    case ProductActions.DELETE_PRODUCT:
//     return 
    case ProductActions.LOG_IN:
      return tassign(state, {isLoggedIn: action.payload});
    case ProductActions.ADMIN:
      return tassign(state, {isAdmin: action.payload});
    default:
      return state;
  }
}
