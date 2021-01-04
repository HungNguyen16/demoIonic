import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { StepUtilityPageEnum } from 'src/app/models/step-utility-page-enum';

@Component({
  selector: 'app-network-switch',
  templateUrl: './network-switch.component.html',
  styleUrls: ['./network-switch.component.scss'],
})
export class NetworkSwitchComponent implements OnInit {
  stepEnum = StepUtilityPageEnum;
  router: string;
  // tslint:disable-next-line:variable-name
  constructor(private _router: Router) {
    this.router = _router.url;
   }

  ngOnInit() {}

}
