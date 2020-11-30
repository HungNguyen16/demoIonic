import { TestBed } from '@angular/core/testing';

import { MessageSubscribeService } from './message-subscribe.service';

describe('MessageSubscribeService', () => {
  let service: MessageSubscribeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MessageSubscribeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
