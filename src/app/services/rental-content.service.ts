import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { RentalContentModel } from '../models/rental-content-model';

@Injectable({
  providedIn: 'root'
})
export class RentalContentService {

  public url = 'assets/data/data-rental-content.json';
  constructor(private http: HttpClient) { }

  getAll(): Observable<RentalContentModel[]> {
    return this.http.get<RentalContentModel[]>(this.url).pipe(
      map((res: RentalContentModel[]) => {
        {
          return res;
        }
      })
    );
  }
}
