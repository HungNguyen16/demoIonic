import { Component, OnInit } from '@angular/core';
import { StepUtilityPageEnum } from 'src/app/models/step-utility-page-enum';

@Component({
  selector: 'app-change-level-esim',
  templateUrl: './change-level-esim.component.html',
  styleUrls: ['./change-level-esim.component.scss'],
})
export class ChangeLevelEsimComponent implements OnInit {
  stepEnum = StepUtilityPageEnum;
  constructor() { }

  ngOnInit() {}

}
