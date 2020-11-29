import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { ModalFinishComponent } from 'src/app/components/modal-finish/modal-finish.component';

@Component({
  selector: 'app-recharge-card',
  templateUrl: './recharge-card.page.html',
  styleUrls: ['./recharge-card.page.scss'],
})
export class RechargeCardPage implements OnInit {

  constructor(private modalCtrl: ModalController) { }

  ngOnInit() {
  }
  async openModal() {
    const modal = await this.modalCtrl.create({
      component: ModalFinishComponent
    });
    return await modal.present();
  }
}
