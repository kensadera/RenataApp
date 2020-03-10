export interface Sale {
    id: number;
    date: Date;
    saleType: string;
    PayType: string;
    typeName: string;
    modelName: string;
    cost: any;
    imei: string;
    isPaid: boolean;
    userId: number;
}
