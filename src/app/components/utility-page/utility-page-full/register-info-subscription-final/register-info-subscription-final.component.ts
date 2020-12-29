import { Component, OnInit } from '@angular/core';
import { StepUtilityPageEnum } from 'src/app/models/step-utility-page-enum';

@Component({
  selector: 'app-register-info-subscription-final',
  templateUrl: './register-info-subscription-final.component.html',
  styleUrls: ['./register-info-subscription-final.component.scss'],
})
export class RegisterInfoSubscriptionFinalComponent implements OnInit {
  stepEnum = StepUtilityPageEnum;
  constructor() { }

  ngOnInit() {}

}
