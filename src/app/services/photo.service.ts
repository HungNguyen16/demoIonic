import { Injectable } from '@angular/core';
import { Plugins, CameraResultType, Capacitor, FilesystemDirectory,
         CameraPhoto, CameraSource, Camera } from '@capacitor/core';
import { Photo } from '../models/photo-model';



@Injectable({
  providedIn: 'root'
})
export class PhotoService {
  public photos: Photo[] = [];
  constructor() { }

  private async savePicture(cameraPhoto: CameraPhoto) { }
  // public async addNewToGallery() {
  //   // Take a photo
  //   const capturedPhoto = await Camera.getPhoto({
  //     resultType: CameraResultType.Uri, // file-based data; provides best performance
  //     source: CameraSource.Camera, // automatically take a new photo with the camera
  //     quality: 100 // highest quality (0 to 100)
  //   });

  //   // Save the picture and add it to photo collection
  //   const savedImageFile = await this.savePicture(capturedPhoto);
  //   this.photos.unshift(savedImageFile);
  // }

}
