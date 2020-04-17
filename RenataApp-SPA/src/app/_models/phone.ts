import { User } from './user';


export interface Phone {
    id: number;
    date: Date;
    supplierName: string;
    typeName: string;
    modelName: string;
    cost: any;
    imei: string;
    user: User;
    userId: number;
}
