import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { MessageSubscribeData } from '../models/message-subscribe-data';

@Injectable({
  providedIn: 'root'
})
export class MessageSubscribeService {
  private subject = new Subject<MessageSubscribeData>();

  sendMessage(messageData: MessageSubscribeData): void {
      this.subject.next(messageData);
  }

  clearMessages(): void {
      this.subject.next(null);
  }

  getMessage(): Observable<MessageSubscribeData> {
      return this.subject.asObservable();
  }
}
