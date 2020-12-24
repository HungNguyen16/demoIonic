import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/internal/operators/map';
import { PhoneNumberRegisterComponent } from '../components/utility-page/phone-number-register/phone-number-register.component';
import { PhoneNumberRegisterModel } from '../models/phone-number-register-model';

@Injectable({
  providedIn: 'root'
})
export class PhoneNumberRegisterService {
  public url = 'assets/data/data-phone-number-register.json';
  constructor(private http: HttpClient) { }
  getPhoneNumberByType(type: string): Observable<PhoneNumberRegisterModel[]> {
    return this.http.get<PhoneNumberRegisterModel[]>(this.url).pipe(
      map((res: PhoneNumberRegisterModel[]) => {
        {
          res = res.filter((e) => e.utilityType === type);
          return res;
        }
      })
    );
  }

}
