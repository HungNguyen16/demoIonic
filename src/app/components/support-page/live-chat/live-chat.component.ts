import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { CameraResultType, CameraSource, Capacitor, Plugins } from '@capacitor/core';
import { IonContent, IonInfiniteScrollContent, Platform } from '@ionic/angular';
const { Camera } = Plugins;

@Component({
  selector: 'app-live-chat',
  templateUrl: './live-chat.component.html',
  styleUrls: ['./live-chat.component.scss'],
})
export class LiveChatComponent implements OnInit {
  messages = [
    {
      user: 'Hung Nguyen',
      createdAt: 17854252,
      msg: 'Hey there! First, thanks for asking. May I know how many designers ?'
    },
    {
      user: 'Hung Nguyen 1',
      createdAt: 17854253,
      msg: 'Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet'
    },
    {
      user: 'Hung Nguyen 2',
      createdAt: 17854254,
      msg: 'Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet'
    },
    {
      user: '',
      createdAt: 1452585,
      msg: 'Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet'
    }
  ];
  currentUser = 'Hung Nguyen';
  newMsg = '';
  @ViewChild(IonContent) content: IonContent;
  @ViewChild('filePicker', {static: false}) filePickRef: ElementRef<HTMLInputElement>;
  photo: SafeResourceUrl;
  isDesktop: boolean;
  constructor(private platform: Platform, private sanitizer: DomSanitizer) { }

  ngOnInit() {}
  // send message
  sendMessage() {
    this.messages.push({
      user: 'messi',
      createdAt: new Date().getTime(),
      msg: this.newMsg
    });

    this.newMsg = '';
    setTimeout(() => {
      this.content.scrollToBottom(200);
    });
  }
  // get picture from camera
  async getPicture(type: string) {
    if (!Capacitor.isPluginAvailable('Camera') || (this.isDesktop && type === 'gallery')) {
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
    this.photo = this.sanitizer.bypassSecurityTrustResourceUrl(image && (image.dataUrl));
  }

  // on file choose
  onFileChoose(event: Event) {
    const file = (event.target as HTMLInputElement).files[0];
    const pattern = /image-*/;
    const reader = new FileReader();

    if (!file.type.match(pattern)) {
      console.log('File format not supported');
      return;
    }

    reader.onload = () => {
      this.photo = reader.result.toString();
    };
    reader.readAsDataURL(file);
  }
}
