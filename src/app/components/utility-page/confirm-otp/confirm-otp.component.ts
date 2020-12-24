import { Component, OnInit } from '@angular/core';
import { StepUtilityPageEnum } from 'src/app/models/step-utility-page-enum';

@Component({
  selector: 'app-confirm-otp',
  templateUrl: './confirm-otp.component.html',
  styleUrls: ['./confirm-otp.component.scss'],
})
export class ConfirmOtpComponent implements OnInit {
  stepEnum = StepUtilityPageEnum;
  constructor() { }

  ngOnInit() {}

}
