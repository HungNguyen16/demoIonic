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
}
