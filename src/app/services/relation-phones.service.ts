import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/internal/operators/map';
import { RelationPhoneModel } from '../models/relation-phones-model';

@Injectable({
  providedIn: 'root',
})
export class RelationPhoneService {
  public url = 'assets/data/data-relation-phones.json';
  constructor(private http: HttpClient) { }

  getListPhones(): Observable<RelationPhoneModel[]> {
    return this.http.get<RelationPhoneModel[]>(this.url).pipe(
      map((res: RelationPhoneModel[]) => {
        {
          return res;
        }
      })
    );
  }
}
