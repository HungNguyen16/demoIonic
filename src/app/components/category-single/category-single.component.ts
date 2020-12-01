import { Component, OnInit, Input } from '@angular/core';
import { SubCategory } from '../../models/category-model';
import { CategoryService } from '../../services/category.service';

@Component({
  selector: 'app-category-single',
  templateUrl: './category-single.component.html',
  styleUrls: ['./category-single.component.scss'],
})
export class CategorySingleComponent implements OnInit {

  @Input() type: string;
  @Input() subType: string;
  subData: SubCategory = null;

  constructor(private categoryService: CategoryService) { }

  ngOnInit() {
    this.categoryService.getCategoryBySubType(this.type, this.subType).subscribe(res => {
      this.subData = res;
      console.log(this.subData);
      console.log(this.subData.subName);
    });
  }

}
