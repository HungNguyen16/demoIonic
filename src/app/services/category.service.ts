import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/internal/operators/map';
import { CategoryModel, SubCategory, Mockup } from '../models/category-model';

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
    const mockupItems: Mockup[] = [];
    return this.http.get<CategoryModel[]>(this.url).pipe(
      map((res: CategoryModel[]) => {
        {
          res = res.filter((e) => e.categoryType === type);
          for (const subItems of res[0].categoryItems) {
            for (const item of subItems.subItems) {
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
    const mockupItems: Mockup[] = [];
    return this.http.get<CategoryModel[]>(this.url).pipe(
      map((res: CategoryModel[]) => {
        {
          res = res.filter((e) => e.categoryType === type);
          for (const subItems of res[0].categoryItems) {
            for (const item of subItems.subItems) {
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

  getCategoryBySubType(type: string, subType: string): Observable<SubCategory> {
    let subItem: SubCategory;
    return this.http.get<CategoryModel[]>(this.url).pipe(
      map((res: CategoryModel[]) => {
        {
          res = res.filter((e) => e.categoryType === type);
          for (const item of res[0].categoryItems) {
            if (item.subType === subType) {
              subItem = item;
            }
          }
          return subItem;
        }
      })
    );
  }


}
