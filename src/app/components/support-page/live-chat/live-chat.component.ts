import { Component, OnInit } from '@angular/core';

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
      msg: 'Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet'
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
  ];
  currentUser = 'Hung Nguyen';
  newMsg = '';
  constructor() { }

  ngOnInit() {}

  sendMessage() {
    
  }
}
