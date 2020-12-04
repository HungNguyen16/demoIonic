import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { VoucherModel } from '../models/voucher-model';
@Injectable({
  providedIn: 'root'
})
export class VoucherService {
  public url = 'assets/data/data-voucher.json';
  constructor(private http: HttpClient) { }

  getAllVoucher(): Observable<VoucherModel[]> {
    return this.http.get<VoucherModel[]>(this.url);
  }
}
