import { Component, OnInit } from '@angular/core';
import { ICategory } from 'src/app/shared/interfaces/category.interface';
import { Category } from 'src/app/shared/classes/category.model';
import { CategoriesService } from 'src/app/shared/services/categories.service';

@Component({
  selector: 'app-admin-category',
  templateUrl: './admin-category.component.html',
  styleUrls: ['./admin-category.component.scss']
})
export class AdminCategoryComponent implements OnInit {
  adminDiscounts: Array<ICategory>;
  title: string;
  text: string;
  editId: number;
  editStatus: boolean = false;
  constructor(private discountService: CategoriesService) {
    this.getData();
  }

  ngOnInit() { }
  private getData(): void {
    this.discountService.getCategories().subscribe(
      data => {
        this.adminDiscounts = data;

      },
      err => {
        console.log(err);

      }
    )
  }
  public addDiscount(): void {
    const newDis = new Category(1, this.title);
    if (this.adminDiscounts.length > 0) {
      newDis.id = this.adminDiscounts.slice(-1)[0].id + 1;
    }
    this.discountService.addDiscount(newDis).subscribe(
      () => {
        this.getData();
      }
    );

    this.title = '';
    this.text = '';
  }

  public deleteDiscount(obj: ICategory): void {
    this.discountService.deleteDiscount(obj.id).subscribe(
      () => {
        this.getData();
      }
    );

  }

  public editDiscount(obj: ICategory): void {
    this.title = obj.title;
    this.editId = obj.id;
    this.editStatus = true;
  }
  public saveEditDiscount(): void {
    const editDis = new Category(this.editId, this.title);
    this.discountService.editDiscount(editDis).subscribe(
      () => {
        this.getData();
      }
    );
    this.title = '';

    this.editStatus = false;
  }
}
