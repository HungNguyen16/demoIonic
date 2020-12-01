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
  title = '';

  constructor(private categoryService: CategoryService) { }

  ngOnInit() {
    if (this.type === 'itel-game') {
      this.title = 'GAME';
    }else if (this.type === 'itel-music') {
      this.title = 'MUSIC';
    }else if (this.type === 'itel-sport') {
      this.title = 'SPORT';
    }else if (this.type === 'itel-cinema') {
      this.title = 'CINEMA';
    }
    this.categoryService.getOnHomeByType(this.type).subscribe(res => {
      this.mockupData = res;
    });
  }

}
