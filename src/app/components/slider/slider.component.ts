import { Component, Input, OnInit } from '@angular/core';
// import { Category } from '../../models/category';
// import { CategoryService } from '../../services/category.service';

import { SliderService } from '../../services/slider.service';
import { CardModel } from '../../models/card-model';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.scss'],
})

export class SliderComponent implements OnInit {

  @Input() type: string;
  cardData: CardModel[] = [];

  sliderOptions = {
    slidesPerView: 1,
    initialSlide: 1,
    speed: 800,
    on: {
      ionSlideTransitionStart() {
        console.log('next start');
      }, ionSlideTransitionEnd() {
        console.log('next end');
      }
    }
  };

  constructor(private sliderService: SliderService) { }

  ngOnInit() {
    console.log(this.type);
    this.sliderService.getListByType(this.type).subscribe(res => {
      this.cardData = res;
    });

  }
}
