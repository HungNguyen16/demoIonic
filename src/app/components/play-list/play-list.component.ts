import { Component, OnInit, Input } from '@angular/core';
import { Mockup } from '../../models/category-model';
import { CategoryService } from '../../services/category.service';

@Component({
  selector: 'app-play-list',
  templateUrl: './play-list.component.html',
  styleUrls: ['./play-list.component.scss'],
})
export class PlayListComponent implements OnInit {

  @Input() type: string;
  mockupData: Mockup[] = [];

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
    this.categoryService.getPlayListByType(this.type).subscribe(res => {
      this.mockupData = res;
    });
  }

}
