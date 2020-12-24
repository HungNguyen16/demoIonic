import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { PaymentModel } from '../models/payment-model';

@Injectable({
  providedIn: 'root'
})
export class PaymentService {
  public url = 'assets/data/data-payment.json';
  constructor(private http: HttpClient) { }

  getListPaymentByType(type?: number): Observable<PaymentModel[]> {
    return this.http.get<PaymentModel[]>(this.url).pipe(
      map((res: PaymentModel[]) => {
        {
          if (res == null) {
            return res;
          }
          res = res.filter((a) => a.paymentType === type);
          return res;
        }
      })
    );
  }
  getAll(): Observable<PaymentModel[]> {
    return this.http.get<PaymentModel[]>(this.url);
  }
  
  // getPlayListByType(type: string): Observable<Mockup[]> {
  //   const mockupItems: Mockup[] = [];
  //   return this.http.get<CategoryModel[]>(this.url).pipe(
  //     map((res: CategoryModel[]) => {
  //       {
  //         res = res.filter((e) => e.categoryType === type);
  //         for (const subItems of res[0].categoryItems) {
  //           for (const item of subItems.subItems) {
  //             if (item.isPlaylist) {
  //               mockupItems.push(item);
  //             }
  //           }
  //         }
  //         return mockupItems;
  //       }
  //     })
  //   );
  // }
}
