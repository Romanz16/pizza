import { Component, OnInit } from '@angular/core';
import { IDiscount } from 'src/app/shared/interfaces/discount.inteface';
import { DiscountService } from 'src/app/shared/services/discount.service';

@Component({
  selector: 'app-discount',
  templateUrl: './discount.component.html',
  styleUrls: ['./discount.component.scss']
})
export class DiscountComponent implements OnInit {
  discounts: Array<IDiscount>;
  constructor(private discountService: DiscountService) { }

  ngOnInit() {
    this.getDisData();
  }
  public getDisData(): void {
    this.discounts = this.discountService.getData();
    console.log(this.discounts);

  }
}
