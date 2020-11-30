import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/internal/operators/map';
import { SportModel, Sport } from '../models/sport-model';

@Injectable({
  providedIn: 'root',
})
export class SportService {
  public url = 'assets/data/data-sport.json';
  public urlMovie = 'assets/data/data-sport-basic.json';
  constructor(private http: HttpClient) { }

  getAll(): Observable<SportModel[]> {
    return this.http.get<SportModel[]>(this.url).pipe(
      map((res: SportModel[]) => {
        {
          return res;
        }
      })
    );
  }

  getPlayList(): Observable<Sport[]> {
    return this.http.get<Sport[]>(this.urlMovie).pipe(
      map((res: Sport[]) => {
        {
          res = res.filter((e) => e.isPlaylist === true);
          return res;
        }
      })
    );
  }

  getMovieHome(): Observable<Sport[]> {
    return this.http.get<Sport[]>(this.urlMovie).pipe(
      map((res: Sport[]) => {
        {
          res = res.filter((e) => e.isHome === true);
          return res;
        }
      })
    );
  }

}
