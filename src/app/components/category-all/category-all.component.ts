import { Component, OnInit, Input } from '@angular/core';
import { CategoryModel, Mockup } from '../../models/category-model';
import { CategoryService } from '../../services/category.service';

@Component({
  selector: 'app-category-all',
  templateUrl: './category-all.component.html',
  styleUrls: ['./category-all.component.scss'],
})
export class CategoryAllComponent implements OnInit {

  @Input() type: string;
  categoryData: CategoryModel = null;

  constructor(private categoryService: CategoryService) { }

  ngOnInit() {
    this.categoryService.getCategoryByType(this.type).subscribe(res => {
      if (res && res.length > 0) {
        this.categoryData = res[0];
      }
    });
  }

}
