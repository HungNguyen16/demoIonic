import { Component, OnInit } from '@angular/core';
import { RentalContentModel } from '../../models/rental-content-model';
import { RentalContentService } from '../../services/rental-content.service';

@Component({
  selector: 'app-rental-content',
  templateUrl: './rental-content.component.html',
  styleUrls: ['./rental-content.component.scss'],
})
export class RentalContentComponent implements OnInit {
  // cinemaData: CinemaModel[] = [];
  // movieData: Movie[] = [];
  rentalContentData: RentalContentModel[] = [];
  checkIndex = 0;

  constructor(private reantalContentService: RentalContentService) { }

  ngOnInit() {
    this.reantalContentService.getAll().subscribe(res => {
      this.rentalContentData = res;
      console.log('abac', this.rentalContentData);
    });
  }
}
