import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { NotificationModel } from '../models/notification-model';

@Injectable({
  providedIn: 'root'
})
export class NotificationService {
  public url = 'assets/data/data-notification.json';
  constructor(private http: HttpClient) { }

getListNoti(): Observable<NotificationModel[]> {
    return this.http.get<NotificationModel[]>(this.url).pipe(
      map((res: NotificationModel[]) => {
        {
          return res;
        }
      })
    );
  }

}
