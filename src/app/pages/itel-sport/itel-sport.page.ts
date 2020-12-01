import { Component, OnInit } from '@angular/core';
import { CategoryModel, Mockup } from '../../models/category-model';
import { CategoryService } from '../../services/category.service';

@Component({
  selector: 'app-itel-sport',
  templateUrl: './itel-sport.page.html',
  styleUrls: ['./itel-sport.page.scss'],
})
export class ItelSportPage implements OnInit {

  categoryData: CategoryModel = null;
  mockupData: Mockup[] = [];

  slideOptions = {
    slidesPerView: 1,
    initialSlide: 1,
    speed: 400,
    loop: true,
    spaceBetween: 20,
    scrollbar: true,
    loopAdditionalSlides: 1,
    on: {
      ionSlideTransitionStart() {
        console.log('next start');
      }, ionSlideTransitionEnd() {
        console.log('next end');
      }
    }
  };

  constructor(private categoryService: CategoryService) { }

  ngOnInit() {
    this.categoryService.getCategoryByType('itel-sport').subscribe(res => {
      if (res && res.length > 0) {
        this.categoryData = res[0];
      }
    });
    this.categoryService.getPlayListByType('itel-sport').subscribe(res => {
      this.mockupData = res;
    });
  }

}
