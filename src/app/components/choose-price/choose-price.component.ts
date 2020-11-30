import { Component, OnInit } from '@angular/core';
import { ChoosePriceService } from '../../services/choose-price.service';
import { ChoosePriceModel } from '../../models/choose-price-model';

@Component({
  selector: 'app-choose-price',
  templateUrl: './choose-price.component.html',
  styleUrls: ['./choose-price.component.scss'],
})
export class ChoosePriceComponent implements OnInit {
  choosePrices: ChoosePriceModel[] = [];
  checkIndex = 0;
  constructor(private choosePriceService: ChoosePriceService) { }

  ngOnInit() {
    this.choosePriceService.getListPrices().subscribe(res => {
      this.choosePrices = res;
      console.log(this.choosePrices);
    });
  }
}
