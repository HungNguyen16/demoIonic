import { Component, OnInit } from '@angular/core';
import { PromotionService } from '../../services/promotion.service';
import { PromotionModel } from '../../models/promotion-model';

@Component({
  selector: 'app-promotion',
  templateUrl: './promotion.component.html',
  styleUrls: ['./promotion.component.scss'],
})
export class PromotionComponent implements OnInit {
  promotionData: PromotionModel[] = [];

  constructor(private promotionService: PromotionService) { }

  ngOnInit() {
    this.promotionService.getAll().subscribe(res => {
      this.promotionData = res;
    });
  }

}
