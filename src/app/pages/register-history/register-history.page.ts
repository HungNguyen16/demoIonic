import { Component, OnInit } from '@angular/core';
import { Photo, PhotoService } from '../../services/photo.service';

@Component({
  selector: 'app-register-history',
  templateUrl: './register-history.page.html',
  styleUrls: ['./register-history.page.scss'],
})
export class RegisterHistoryPage implements OnInit {
  public photos: Photo[] = [];
  uploadImage: string;
  constructor(public photoService: PhotoService) {}

  async ngOnInit() {
  }
  addPhotoToGallery() {
    this.photoService.addNewToGallery();
  }

}
