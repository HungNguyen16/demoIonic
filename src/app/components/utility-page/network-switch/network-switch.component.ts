import { Component, OnInit } from '@angular/core';
import { StepUtilityPageEnum } from 'src/app/models/step-utility-page-enum';

@Component({
  selector: 'app-network-switch',
  templateUrl: './network-switch.component.html',
  styleUrls: ['./network-switch.component.scss'],
})
export class NetworkSwitchComponent implements OnInit {
  stepEnum = StepUtilityPageEnum;
  constructor() { }

  ngOnInit() {}

}
