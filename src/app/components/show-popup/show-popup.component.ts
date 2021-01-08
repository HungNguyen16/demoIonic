import { Component, Input, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { ConstantValue } from 'src/app/configs/constant-value-config.js';
import { MessageSubscribeService } from 'src/app/services/message-subscribe.service';

@Component({
  selector: 'app-show-popup',
  templateUrl: './show-popup.component.html',
  styleUrls: ['./show-popup.component.scss'],
})
export class ShowPopupComponent implements OnInit {
  @Input() typePopup: number;
  showPopup = true;
  // listPopup = ConstantValue.ListPopup;
  currentPopup = 0;
  constructor(private modalCtrl: ModalController, private messageSubscribe: MessageSubscribeService) { }

  ngOnInit(): void {
    // this.messageSubscribe.getMessage().subscribe((dataMessage) => {
    //   if ( dataMessage != null) {
    //     if (dataMessage.Key === ConstantValue.KeyMessageChangePopup) {
    //       this.currentPopup = dataMessage.Data;
    //     }
    //   }
    // });
  }
  dismiss() {
    this.modalCtrl.dismiss();
  }
}
