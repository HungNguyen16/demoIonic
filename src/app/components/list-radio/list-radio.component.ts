import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-list-radio',
  templateUrl: './list-radio.component.html',
  styleUrls: ['./list-radio.component.scss'],
})
export class ListRadioComponent implements OnInit {

  constructor(public modalController: ModalController) { }

  ngOnInit() {}

}
