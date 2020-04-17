import { User } from './user';

export interface Inventory {
    id: number;
    date: Date;
    storeName: string;
    typeName: string;
    modelName: string;
    cost: any;
    imei: string;
    inStock: boolean;
    user: User;
    userId: number;
}
