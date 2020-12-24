import { Component, Input, OnInit } from '@angular/core';
import { ChooseDocumentModel } from 'src/app/models/choose-document-model';
import { StepSupportPageEnum } from 'src/app/models/step-support-page-enum';
import { ChooseDocumentService } from 'src/app/services/choose-document.service';

@Component({
  selector: 'app-choose-document-type',
  templateUrl: './choose-document-type.component.html',
  styleUrls: ['./choose-document-type.component.scss'],
})
export class ChooseDocumentTypeComponent implements OnInit {
  stepEnum = StepSupportPageEnum;
  @Input() type: string;
  documentData: ChooseDocumentModel = null;

  constructor(private chooseDocumentService: ChooseDocumentService) { }

  ngOnInit() {
    this.chooseDocumentService.getChooseDocumentByType(this.type).subscribe(res => {
      if (res && res.length > 0) {
        this.documentData = res[0];
        console.log('abc', this.documentData);
      }
    });
  }

}
