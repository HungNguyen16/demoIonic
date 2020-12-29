import { Component, OnInit } from '@angular/core';
import { StepUtilityPageEnum } from 'src/app/models/step-utility-page-enum';

@Component({
  selector: 'app-register-info-subscription',
  templateUrl: './register-info-subscription.component.html',
  styleUrls: ['./register-info-subscription.component.scss'],
})
export class RegisterInfoSubscriptionComponent implements OnInit {
  stepEnum = StepUtilityPageEnum;
  constructor() { }

  ngOnInit() {}

}
