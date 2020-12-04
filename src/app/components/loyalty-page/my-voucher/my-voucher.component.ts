import { Component, Input, OnInit } from '@angular/core';
import { VoucherModel } from 'src/app/models/voucher-model';
import { VoucherService } from '../../../services/voucher.service';

@Component({
  selector: 'app-my-voucher',
  templateUrl: './my-voucher.component.html',
  styleUrls: ['./my-voucher.component.scss'],
})
export class MyVoucherComponent implements OnInit {
  voucherData: VoucherModel[] = [];
  @Input() hotIndex: number;
  public hotMenus = [
    {
      title: 'Sim số',
      url: '/home',
      icon: 'phone'
    }, {
      title: 'Music',
      url: '/itel-music',
      icon: 'music'
    }, {
      title: 'Game',
      url: '/itel-game',
      icon: 'game'
    }, {
      title: 'Cinema',
      url: '/itel-cinema',
      icon: 'cinema'
    }, {
      title: 'Sport',
      url: '/itel-sport',
      icon: 'sport'
    }
  ];
  constructor(private voucherService: VoucherService) { }

  ngOnInit() {

    this.voucherService.getAllVoucher().subscribe(res => {
      this.voucherData = res;
      console.log('voucher data', this.voucherData);
    });
  }

}
