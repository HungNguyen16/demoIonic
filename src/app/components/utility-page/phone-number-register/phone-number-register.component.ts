import { Component, Input, OnInit } from '@angular/core';
import { CategoryModel } from 'src/app/models/category-model';
import { PhoneNumberRegisterModel } from 'src/app/models/phone-number-register-model';
import { CategoryService } from 'src/app/services/category.service';
import { PhoneNumberRegisterService } from 'src/app/services/phone-number-register.service';

@Component({
  selector: 'app-phone-number-register',
  templateUrl: './phone-number-register.component.html',
  styleUrls: ['./phone-number-register.component.scss'],
})
export class PhoneNumberRegisterComponent implements OnInit {

  @Input() type: string;
  phoneNumberData: PhoneNumberRegisterModel = null;
  constructor( private phoneNumberRegisterService: PhoneNumberRegisterService) { }

  ngOnInit() {
    this.phoneNumberRegisterService.getPhoneNumberByType(this.type).subscribe(res => {
      if (res && res.length > 0) {
        this.phoneNumberData = res[0];
        console.log('abc', this.phoneNumberData);
      }
    });
  }

}
