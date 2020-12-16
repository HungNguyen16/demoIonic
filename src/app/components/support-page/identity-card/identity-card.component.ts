import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { CameraResultType, CameraSource, Capacitor, Plugins } from '@capacitor/core';
import { Platform } from '@ionic/angular';
const { Camera } = Plugins;

@Component({
  selector: 'app-identity-card',
  templateUrl: './identity-card.component.html',
  styleUrls: ['./identity-card.component.scss'],
})
export class IdentityCardComponent implements OnInit {
  @Input() title: string;

  @ViewChild('filePicker', {static: false}) filePickRef: ElementRef<HTMLInputElement>;
  identityBefore: SafeResourceUrl;
  identityAfter: SafeResourceUrl;
  isDesktop: boolean;
  constructor(private platform: Platform, private sanitizer: DomSanitizer) { }

  ngOnInit() {}


  async getIdentityBefore(type: string) {
    if (!Capacitor.isPluginAvailable('Camera')) {
      this.filePickRef.nativeElement.click();
      return;
    }
    const image = await Camera.getPhoto({
      quality: 100,
      width: 400,
      allowEditing: true,
      resultType: CameraResultType.DataUrl,
      source: CameraSource.Prompt
    });
    this.identityBefore = this.sanitizer.bypassSecurityTrustResourceUrl(image && (image.dataUrl));
  }

  async getIdentityAfter(type: string) {
    if (!Capacitor.isPluginAvailable('Camera')) {
      this.filePickRef.nativeElement.click();
      return;
    }
    const image = await Camera.getPhoto({
      quality: 100,
      width: 400,
      allowEditing: true,
      resultType: CameraResultType.DataUrl,
      source: CameraSource.Prompt
    });
    this.identityAfter = this.sanitizer.bypassSecurityTrustResourceUrl(image && (image.dataUrl));
  }

  // removeFile(event = null) {
  //   if (event != null) {
  //     event.preventDefault();
  //   }
  //   this.file = null;
  //   $('#field_emp_15').val("");
  //   this.fileIsExist = null;
  //   this.url = "";
  //   $('#label_field_emp_15').html('Tải tệp lên...');
  //   // this.validate_emp_avatar();
  // }
  // onFileChoose(event: Event) {
  //   const file = (event.target as HTMLInputElement).files[0];
  //   const pattern = /image-*/;
  //   const reader = new FileReader();

  //   if (!file.type.match(pattern)) {
  //     console.log('File format not supported');
  //     return;
  //   }

  //   reader.onload = () => {
  //     this.photo = reader.result.toString();
  //   };
  //   reader.readAsDataURL(file);
  // }
}
