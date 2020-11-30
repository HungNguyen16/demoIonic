import { Component, OnInit } from '@angular/core';
import { MessageSubscribeService } from '../../services/message-subscribe.service';
import { MessageSubscribeData } from 'src/app/models/message-subscribe-data';
import { ConstantValue } from 'src/app/configs/constant-value-config.js';

@Component({
  selector: 'app-message-success',
  templateUrl: './message-success.component.html',
  styleUrls: ['./message-success.component.scss'],
})
export class MessageSuccessComponent implements OnInit {
  
  constructor(private messageSubcribe: MessageSubscribeService) { }

  ngOnInit() {}
  cofirmInfo(): void {
    this.messageSubcribe.sendMessage(
      new MessageSubscribeData(ConstantValue.KeyMessageChangePopup, ConstantValue.ListPopup.ContentRentalSuccess));
  }
}
