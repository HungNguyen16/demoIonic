import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { ModalFinishComponent } from 'src/app/components/modal-finish/modal-finish.component';

@Component({
  selector: 'app-topup',
  templateUrl: './topup.page.html',
  styleUrls: ['./topup.page.scss'],
})
export class TopupPage implements OnInit {

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
