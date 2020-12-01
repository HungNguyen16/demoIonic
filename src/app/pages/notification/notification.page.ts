import { Component, OnInit } from '@angular/core';
import { NotificationModel } from 'src/app/models/notification-model';
import { NotificationService } from 'src/app/services/notification.service';

@Component({
  selector: 'app-notification',
  templateUrl: './notification.page.html',
  styleUrls: ['./notification.page.scss'],
})
export class NotificationPage implements OnInit {
  notiData: NotificationModel[] = [];
  constructor(private notificationService: NotificationService) { }

  ngOnInit() {
    this.notificationService.getListNoti().subscribe(res => {
      this.notiData = res;
      console.log('thong bao', this.notiData);
    });
  }

}
