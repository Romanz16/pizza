import { IDiscount } from '../interfaces/discount.inteface';
export class Discount implements IDiscount {
    constructor(
        public id: number,
        public title: string,
        public text: string
    ){}
}