import { Injectable } from '@angular/core';
import { ConstantValue } from '../configs/constant-value-config.js';
import { LoginResponseModel } from '../models/login-response-model';

@Injectable({
  providedIn: 'root'
})
export class CommonService {

  constructor() { }

  static isNullOrEmpty(str: any): boolean {
    return str === '' || str === undefined || str == null;
  }

  static deleteCookie(name: string): any {
    document.cookie = name + '=; path=/; expires=Thu, 01 Jan 1970 00:00:01 GMT;';
  }
  static setCookie(cname: string, cValue: any): any {
    if (typeof cValue === 'object' && cValue !== null) {
      cValue = JSON.stringify(cValue);
    }
    const expiry = new Date();
    expiry.setMinutes(expiry.getMinutes() + 1440);
    const expires = 'expires=' + expiry.toUTCString();
    document.cookie = cname + '=' + cValue + ';' + expires + ';path=/';
  }
  static isValidateEmail(email): any {
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
  }

  static isValidatePassword(pass): any {
    return (pass.length >= 6 && pass.length <= 32);
  }

  static getCookie<T>(cname: string): any {
    const name = cname + '=';
    const decodedCookie = decodeURIComponent(document.cookie);
    const ca = decodedCookie.split(';');
    for (let cookieItem of ca) {
      while (cookieItem.charAt(0) === ' ') {
        cookieItem = cookieItem.substring(1);
      }
      if (cookieItem.indexOf(name) === 0) {
        const res = cookieItem.substring(name.length, cookieItem.length);
        try {
          return JSON.parse(res) as T;
        } catch (e) {
          return res;
        }
      }
    }
    return null;
  }

  static checkLogin(): boolean {
    const dataCookie = this.getCookie<LoginResponseModel>(ConstantValue.AuthorizationDataKey);
    return dataCookie != null && dataCookie.AccessToken !== undefined;
  }

  static getUserName(): string {
    const dataCookie = this.getCookie<LoginResponseModel>(ConstantValue.AuthorizationDataKey);
    if (dataCookie != null && dataCookie.AccessToken !== undefined) {
      return dataCookie.FullName !== '' ? dataCookie.FullName : 'Thoát';
    }
    return '';
  }
}
