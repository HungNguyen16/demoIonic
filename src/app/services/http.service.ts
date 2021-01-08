import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { ConstantValue } from '../configs/constant-value-config.js';

@Injectable({
  providedIn: 'root'
})
export class HttpService {
  static apiUrl = ConstantValue.UrlApi;
  token: string;
  isProcessRefreshToken = false;
  constructor(
    private router: Router,
    private httpClient: HttpClient
  ) { }

  post(data: any, apiPath: string): Observable<any> {
    // const options = this.checkTokenExpired();
    return this.httpClient.post(HttpService.apiUrl + apiPath, data);
      // .pipe(map((res: any) => res),
      //   catchError((e: any) => this.handleError(e)));
  }
  logout(): any {
    this.token = null;
    this.router.navigate(['/']).then(() => window.location.reload());
  }
}
