export interface CreditCard {

    id: number;
    customerId:number;
    cardOwner: string;
    cardNumber: string;
    expYear:number;
    expMonth:number;
    cvv: number;
    amount:number;
}