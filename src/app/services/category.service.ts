import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/internal/operators/map';
import { CategoryModel, Mockup } from '../models/category-model';

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

  getPlayListByType(type: string): Observable<Mockup[]> {
    let mockupItems: Mockup[] = [];
    return this.http.get<CategoryModel[]>(this.url).pipe(
      map((res: CategoryModel[]) => {
        {
          res = res.filter((e) => e.categoryType === type);
          for (let subItems of res[0].categoryItems) {
            for (let item of subItems.subItems) {
              if (item.isPlaylist) {
                mockupItems.push(item);
              }
            }
          }
          return mockupItems;
        }
      })
    );
  }

  getOnHomeByType(type: string): Observable<Mockup[]> {
    let mockupItems: Mockup[] = [];
    return this.http.get<CategoryModel[]>(this.url).pipe(
      map((res: CategoryModel[]) => {
        {
          res = res.filter((e) => e.categoryType === type);
          for (let subItems of res[0].categoryItems) {
            for (let item of subItems.subItems) {
              if (item.isHome) {
                mockupItems.push(item);
              }
            }
          }
          return mockupItems;
        }
      })
    );
  }

}
