import { Component, OnInit } from '@angular/core';
import { StepSupportPageEnum } from 'src/app/models/step-support-page-enum';

@Component({
  selector: 'app-confirm-info',
  templateUrl: './confirm-info.component.html',
  styleUrls: ['./confirm-info.component.scss'],
})
export class ConfirmInfoComponent implements OnInit {

  stepEnum = StepSupportPageEnum;
  constructor() { }

  ngOnInit() {}

}
