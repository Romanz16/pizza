import { Injectable } from '@angular/core';
import { IDiscount } from '../interfaces/discount.inteface';

@Injectable({
  providedIn: 'root'
})
export class DiscountService {
  discounts: Array<IDiscount> = [
    {
      id: 1,
      title: 'Free pizza',
      text: 'lorem lorem lorem'
    }
  ];
  constructor() { }
  getData(): Array<IDiscount> {
    return this.discounts;
  }

  setData(obj: IDiscount): void {
    this.discounts.push(obj);
  }
  deleteData(index: number): void {
    this.discounts.splice(index, 1);
  }
  updateData(obj: IDiscount, index){
    this.discounts.splice(index, 1,obj);
  }
}
