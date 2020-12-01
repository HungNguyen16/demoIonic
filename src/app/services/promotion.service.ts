import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/internal/operators/map';
import { PromotionModel } from '../models/promotion-model';

@Injectable({
  providedIn: 'root'
})

export class PromotionService {

  public url = 'assets/data/data-promotion.json';

  constructor(private http: HttpClient) { }

  getAll(): Observable<PromotionModel[]> {
    return this.http.get<PromotionModel[]>(this.url).pipe(
      map((res: PromotionModel[]) => {
        {
          return res;
        }
      })
    );
  }

}
