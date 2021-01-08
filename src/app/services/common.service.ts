import { Injectable } from '@angular/core';

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
}
