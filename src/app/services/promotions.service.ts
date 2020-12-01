import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/internal/operators/map';
import { PromotionsModel } from '../models/promotions-model';

@Injectable({
  providedIn: 'root'
})

export class PromotionsService {

  public url = 'assets/data/data-promotions.json';

  constructor(private http: HttpClient) { }

  getAll(): Observable<PromotionsModel[]> {
    return this.http.get<PromotionsModel[]>(this.url).pipe(
      map((res: PromotionsModel[]) => {
        {
          return res;
        }
      })
    );
  }

}
