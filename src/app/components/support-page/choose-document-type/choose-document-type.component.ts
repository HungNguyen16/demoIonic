import { Component, OnInit } from '@angular/core';
import { StepSupportPageEnum } from 'src/app/models/step-support-page-enum';

@Component({
  selector: 'app-choose-document-type',
  templateUrl: './choose-document-type.component.html',
  styleUrls: ['./choose-document-type.component.scss'],
})
export class ChooseDocumentTypeComponent implements OnInit {
  stepEnum = StepSupportPageEnum;
  constructor() { }

  ngOnInit() {}

}
