import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { ChoosePriceModel } from '../models/choose-price-model';

@Injectable({
  providedIn: 'root'
})
export class ChoosePriceService {
  public url = 'assets/data/data-choose-price.json';
  constructor(private http: HttpClient) { }

  getListPrices(): Observable<ChoosePriceModel[]> {
    return this.http.get<ChoosePriceModel[]>(this.url).pipe(
      map((res: ChoosePriceModel[]) => {
        {
          return res;
        }
      })
    );
  }
}
