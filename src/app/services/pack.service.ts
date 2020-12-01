import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/internal/operators/map';
import { PackModel } from '../models/pack-model';

@Injectable({
  providedIn: 'root'
})

export class PackService {

  public url = 'assets/data/data-pack.json';

  constructor(private http: HttpClient) { }

  getAll(): Observable<PackModel[]> {
    return this.http.get<PackModel[]>(this.url).pipe(
      map((res: PackModel[]) => {
        {
          return res;
        }
      })
    );
  }

}
