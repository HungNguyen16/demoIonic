import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-favorite-item',
  templateUrl: './favorite-item.component.html',
  styleUrls: ['./favorite-item.component.scss'],
})
export class FavoriteItemComponent implements OnInit {

  constructor(public alertController: AlertController) { }

  ngOnInit() {}

  async presentAlertConfirm() {
    const alert = await this.alertController.create({
      cssClass: 'alert-box',
      message: 'Message <strong>text</strong>!!!',
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          cssClass: 'cancel',
          handler: (blah) => {
            console.log('Confirm Cancel: blah');
          }
        }, {
          text: 'Okay',
          cssClass: 'confirm',
          handler: () => {
            console.log('Confirm Okay');
          }
        }
      ]
    });

    await alert.present();
  }

}
