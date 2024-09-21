export interface ICoupon {
    code: string,
    description: string,
    discountAmount: number,
    discountType: string,
    expirationDate: Date,
    createdAt: Date, 
    updatedAt: Date,
}