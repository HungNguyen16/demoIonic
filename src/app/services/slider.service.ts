import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CardModel } from '../models/card-model';
import { Observable } from 'rxjs';
import { map } from 'rxjs/internal/operators/map';

@Injectable({
  providedIn: 'root'
})
export class SliderService {

  public url = 'assets/data/data-card.json';

  constructor(private http: HttpClient) { }

  getListByType(type: string): Observable<CardModel[]> {
    return this.http.get<CardModel[]>(this.url).pipe(
      map((res: CardModel[]) => {
        {
          res.filter((e) => e.type === type);
          return res;
        }
      })
    );
  }

}
