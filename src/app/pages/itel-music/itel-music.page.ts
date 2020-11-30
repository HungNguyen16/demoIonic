import { Component, OnInit } from '@angular/core';
import { CategoryModel } from '../../models/category-model';
import { CategoryService } from '../../services/category.service';

@Component({
  selector: 'app-itel-music',
  templateUrl: './itel-music.page.html',
  styleUrls: ['./itel-music.page.scss'],
})
export class ItelMusicPage implements OnInit {

  categoryData: CategoryModel = null;

  slideOptions = {
    slidesPerView: 1,
    initialSlide: 1,
    speed: 400,
    loop: true,
    spaceBetween: 20,
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
    this.categoryService.getCategoryByType('itel-music').subscribe(res => {
      if (res && res.length > 0) {
        this.categoryData = res[0];
      }
    });
  }

}
