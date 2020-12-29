import { Component, Input, OnInit } from '@angular/core';
import { ChooseDocumentModel } from 'src/app/models/choose-document-model';
import { StepSupportPageEnum } from 'src/app/models/step-support-page-enum';
import { StepUtilityPageEnum } from 'src/app/models/step-utility-page-enum';
import { ChooseDocumentService } from 'src/app/services/choose-document.service';

@Component({
  selector: 'app-choose-document-type',
  templateUrl: './choose-document-type.component.html',
  styleUrls: ['./choose-document-type.component.scss'],
})
export class ChooseDocumentTypeComponent implements OnInit {
  stepEnum = StepUtilityPageEnum;
  @Input() type: string;
  documentData: ChooseDocumentModel = null;
  // test checkbox
  visability: boolean = false;

  public items = [
    {
      title: 'CMND',
      avatar: 'assets/images/support/icon-identity-card.svg',
      number: '1903*********32',
      checkBox: true
    },
    {
      title: 'Can cuoc',
      avatar: 'assets/images/support/icon-identity-card.svg',
      number: '1903*********32',
      checkBox: false
    }
  ];

  constructor(private chooseDocumentService: ChooseDocumentService) { }

  ngOnInit() {
    this.chooseDocumentService.getChooseDocumentByType(this.type).subscribe(res => {
      if (res && res.length > 0) {
        this.documentData = res[0];
        console.log('abc', this.documentData);
      }
    });
  }
  onChanges(items) {
    let isChecked = false;
    // tslint:disable-next-line:prefer-for-of
    for (let i = 0; i < items.length; i++) {
      if (items[i].checkBox === true){
        isChecked = true;
        this.visability = true;
      }
    }
    if (isChecked === false){
      this.visability = false;
    }
  }
}
