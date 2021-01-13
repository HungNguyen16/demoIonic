import { Injectable } from '@angular/core';
import { ToastController } from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})
export class ShowToastService {

  constructor(public toastController: ToastController) { }

  async showError() {
    const toast = await this.toastController.create({
      color: 'dark',
      message: 'Vui lòng nhập Email',
      duration: 2000
    });
    await toast.present();
  }
  async showError1() {
    const toast = await this.toastController.create({
      color: 'dark',
      message: 'Vui lòng nhập mật khẩu',
      duration: 2000
    });
    await toast.present();
  }
}
