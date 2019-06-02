import {Product} from './product';

export class CartItem {
  _id: string;
  quantity: number;
}

export class FullCartItem {
  product: Product;
  quantity: number;
}
