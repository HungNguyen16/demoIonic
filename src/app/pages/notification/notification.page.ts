import { Component, OnInit } from '@angular/core';
import { ToastController } from '@ionic/angular';
import { NotificationModel } from 'src/app/models/notification-model';
import { NotificationService } from 'src/app/services/notification.service';

@Component({
  selector: 'app-notification',
  templateUrl: './notification.page.html',
  styleUrls: ['./notification.page.scss'],
})
export class NotificationPage implements OnInit {
  notiData: NotificationModel[] = [];
  constructor(private notificationService: NotificationService, public toastController: ToastController) { }

  ngOnInit() {
    this.notificationService.getListNoti().subscribe(res => {
      this.notiData = res;
      console.log('thong bao', this.notiData);
    });
  }
  async presentToast() {
    const toast = await this.toastController.create({
      message: 'Show notification',
      duration: 2000
    });
    toast.present();
  }
}
