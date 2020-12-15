import { Component, OnInit, ViewChild } from '@angular/core';
import { IonContent, IonInfiniteScrollContent } from '@ionic/angular';

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
  constructor() { }

  ngOnInit() {}

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
}
