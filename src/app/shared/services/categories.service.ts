import { Injectable } from '@angular/core';
import { ICategory } from '../interfaces/category.interface';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CategoriesService {
  discounts: Array<ICategory> ;
  

  url: string;
  constructor(private http: HttpClient) {
    this.url = "http://localhost:3000/category";
  }
  // public getDiscounts(id: number): Observable<IDiscount> {
  //   return this.http.get<IDiscount>(`${this.url}/${id}`);
  // }

  public getDiscounts(): Observable<Array<ICategory>> {
    return this.http.get<Array<ICategory>>(this.url);
  }

  public addDiscount(obj: ICategory): Observable<Array<ICategory>> {
    return this.http.post<Array<ICategory>>(this.url, obj);
  }
  public deleteDiscount(id: number): Observable<Array<ICategory>> {
    return this.http.delete<Array<ICategory>>(`${this.url}/${id}`);
  }
  public editDiscount(obj: ICategory): Observable<Array<ICategory>> {
    return this.http.put<Array<ICategory>>(`${this.url}/${obj.id}`, obj);
  }
}
