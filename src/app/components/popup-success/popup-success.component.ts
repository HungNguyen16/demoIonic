import { Component, Input, OnInit } from '@angular/core';
import { ConstantValue } from 'src/app/configs/constant-value-config.js';

@Component({
  selector: 'app-popup-success',
  templateUrl: './popup-success.component.html',
  styleUrls: ['./popup-success.component.scss'],
})
export class PopupSuccessComponent implements OnInit {
  listPopup = ConstantValue.ListPopup;
  @Input() successPopup = false;
  constructor() { }

  ngOnInit() {}

}
