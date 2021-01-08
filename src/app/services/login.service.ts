import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { ToastController } from '@ionic/angular';
import { map } from 'rxjs/operators';
import { ConstantValue } from '../configs/constant-value-config.js';
import { CustomerRegisterModel } from '../models/customer-register-model';
import { LoginModel } from '../models/login-response-model';
import { CommonService } from './common.service';
import { HttpService } from './http.service';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private httpService: HttpService, private router: Router, private showToast: ToastController) { }

  async signUpUser(signUpObj: CustomerRegisterModel, redirectUrl: string): Promise<void> {
    this.httpService.post(signUpObj, 'auth/signup').subscribe(() => {
      const loginObj = new LoginModel();
      loginObj.UserName = signUpObj.Email;
      loginObj.PassWord = signUpObj.Password;
      this.signInUser(loginObj, redirectUrl);
    });
  }

  async signInUser(loginObj: LoginModel, redirectLink = ''): Promise<void> {
    this.httpService.post(loginObj, 'auth/login')
      .pipe(map((res: any) => {
        const returnData = res;
        if (returnData.IsClearToken) {
          return returnData;
        }
        const date = new Date();
        date.setSeconds(date.getSeconds() + returnData.AccessToken.ExpiresIn);
        returnData.AccessToken.EndDate = date;
        return returnData;
      })).subscribe((tokenRes) => {
        if (tokenRes.IsClearToken) {
          CommonService.deleteCookie(ConstantValue.AuthorizationDataKey);
        } else {
          CommonService.setCookie(ConstantValue.AuthorizationDataKey, tokenRes);
        }
        if (redirectLink === '') {
          redirectLink = this.router.url;
        }
        this.router.navigateByUrl('/home').then(() => window.location.reload());
      });
  }

  // async signInUser(loginObj: LoginModel, redirectLink: string): Promise<void> {
  //   this.httpService.post(loginObj, 'auth/login')
  //     .pipe(map((res: any) => {
  //       const returnData = res;
  //       if (returnData.IsClearToken) {
  //         return returnData;
  //       }
  //       const date = new Date();
  //       date.setSeconds(date.getSeconds() + returnData.AccessToken.ExpiresIn);
  //       returnData.AccessToken.EndDate = date;
  //       return returnData;
  //     })).subscribe((tokenRes) => {
  //       if (redirectLink === '') {
  //         redirectLink = this.router.url;
  //       }
  //     });
  // }
}
