import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/internal/operators/map';
import { CategoryModel } from '../models/category-model';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  public url = 'assets/data/data-category.json';

  constructor(private http: HttpClient) { }

  getCategoryById(id: number): Observable<CategoryModel[]> {
    return this.http.get<CategoryModel[]>(this.url).pipe(
      map((res: CategoryModel[]) => {
        {
          res = res.filter((e) => e.id === id);
          return res;
        }
      })
    );
  }

  getCategoryByType(type: string): Observable<CategoryModel[]> {
    return this.http.get<CategoryModel[]>(this.url).pipe(
      map((res: CategoryModel[]) => {
        {
          res = res.filter((e) => e.categoryType === type);
          return res;
        }
      })
    );
  }

  /*
  getListByType(type?: number): Observable<Category[]> {
    return this.http.get<Category[]>('assets/data/data-slide.json').pipe(
      map((res: Category[]) => {
        {
          if (res == null) {
            return res;
          }
          res = res.filter((a) => a.categoryType === type);
          return res;
        }
      })
    );
  }*/

}
