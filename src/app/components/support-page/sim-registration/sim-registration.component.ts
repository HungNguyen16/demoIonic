import { Component, Input, OnInit } from '@angular/core';
import { StepServicePageEnum } from 'src/app/models/step-service-page-enum';
import { StepSupportPageEnum } from 'src/app/models/step-support-page-enum';

@Component({
  selector: 'app-sim-registration',
  templateUrl: './sim-registration.component.html',
  styleUrls: ['./sim-registration.component.scss'],
})
export class SimRegistrationComponent implements OnInit {
  @Input() title: string;
  stepEnum = StepSupportPageEnum;
  constructor() { }

  ngOnInit() {}
}
