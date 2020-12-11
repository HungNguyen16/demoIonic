import { Component, OnInit } from '@angular/core';
import { PhotoService } from 'src/app/services/photo.service';

@Component({
  selector: 'app-take-photo',
  templateUrl: './take-photo.component.html',
  styleUrls: ['./take-photo.component.scss'],
})
export class TakePhotoComponent implements OnInit {
  constructor(public photoService: PhotoService) { }

  ngOnInit() {}
  // addPhotoToGallery() {
  //   this.photoService.addNewToGallery();
  // }
}
