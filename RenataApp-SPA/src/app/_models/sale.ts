import { User } from './user';

export interface Sale {
    id: number;
    date: Date;
    saleType: string;
    typeName: string;
    modelName: string;
    price: any;
    imei: string;
    order: string;
    isPaid: boolean;
    user: User;
    userId: number;
}
