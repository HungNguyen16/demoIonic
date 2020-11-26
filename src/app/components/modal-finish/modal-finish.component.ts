import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-modal-finish',
  templateUrl: './modal-finish.component.html',
  styleUrls: ['./modal-finish.component.scss'],
})
export class ModalFinishComponent implements OnInit {

  constructor(private modalCtrl: ModalController) { }

  ngOnInit() {}

  dismiss() {
    this.modalCtrl.dismiss();
  }
}
