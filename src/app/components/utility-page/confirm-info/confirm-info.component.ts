import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { StepSupportPageEnum } from 'src/app/models/step-support-page-enum';
import { StepUtilityPageEnum } from 'src/app/models/step-utility-page-enum';

@Component({
  selector: 'app-confirm-info',
  templateUrl: './confirm-info.component.html',
  styleUrls: ['./confirm-info.component.scss'],
})
export class ConfirmInfoComponent implements OnInit {
  stepEnum = StepUtilityPageEnum;
  @Input() simRegister: number;
  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
  }
}
