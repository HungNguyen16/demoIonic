import { Component, OnInit, Input } from '@angular/core';
import { Mockup } from '../../models/category-model';
import { CategoryService } from '../../services/category.service';

@Component({
  selector: 'app-category-home',
  templateUrl: './category-home.component.html',
  styleUrls: ['./category-home.component.scss'],
})
export class CategoryHomeComponent implements OnInit {

  @Input() type: string;
  mockupData: Mockup[] = [];
  cate = {
    title: '',
    url: ''
  };


  constructor(private categoryService: CategoryService) { }

  ngOnInit() {
    if (this.type === 'itel-game') {
      this.cate.title = 'GAME';
      this.cate.url = '/itel-game';
    } else if (this.type === 'itel-music') {
      this.cate.title = 'MUSIC';
      this.cate.url = '/itel-music';
    } else if (this.type === 'itel-sport') {
      this.cate.title = 'SPORT';
      this.cate.url = '/itel-sport';
    } else if (this.type === 'itel-cinema') {
      this.cate.title = 'CINEMA';
      this.cate.url = '/itel-cinema';
    }
    this.categoryService.getOnHomeByType(this.type).subscribe(res => {
      this.mockupData = res;
    });
  }

}
