export class User {
    _id: string;
    firstName: string;
    lastName: string;
    email: string;
    password: string;
    gender?: Gender; 
    birthDate?: Date;
    phone?: number;
    address?: string;
}

export enum Gender {
    Male, Female, Unspecified
}