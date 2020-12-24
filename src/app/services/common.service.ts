import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CommonService {

  constructor() { }

  static isNullOrEmpty(str: any): boolean {
    return str === '' || str === undefined || str == null;
  }
  static showPopup(): void {
    const body = document.querySelector('body');
    const popupElm = document.getElementsByClassName('popup-overlay');
    body.classList.add('fs-no-scroll');
    popupElm[0].setAttribute('style', 'display:block');
  }
}
