import { Component, OnInit } from '@angular/core';
import { PromotionsService } from '../../services/promotions.service';
import { PromotionsModel } from '../../models/promotions-model';

@Component({
  selector: 'app-promotions',
  templateUrl: './promotions.component.html',
  styleUrls: ['./promotions.component.scss'],
})
export class PromotionsComponent implements OnInit {
  promotionsData: PromotionsModel[] = [];

  constructor(private promotionsService: PromotionsService) { }

  ngOnInit() {
    this.promotionsService.getAll().subscribe(res => {
      this.promotionsData = res;
    });
  }

}
