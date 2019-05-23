import { User} from './user';

export class Product {
    _id: string;
    name: string;
    user: User;
    description: string;
    price: Price;
}

export class Price {
    value: number;
    currency: string;
}

export enum Type {
    Electronics, Fashion, Furniture, Toys
}

export class CartItem {
    _id: string;
    quantity: number;
}

export class FullCartItem {
    item: Product;
    quantity: number;
}