export class Product {
    _id: string;
    name: string;
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
