import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/internal/operators/map';
import { CinemaModel, Movie } from '../models/cinema-model';

@Injectable({
  providedIn: 'root',
})
export class CinemaService {
  public url = 'assets/data/data-cinema.json';
  public urlMovie = 'assets/data/data-movie.json';
  constructor(private http: HttpClient) { }

  getAll(): Observable<CinemaModel[]> {
    return this.http.get<CinemaModel[]>(this.url).pipe(
      map((res: CinemaModel[]) => {
        {
          return res;
        }
      })
    );
  }

  getPlayList(): Observable<Movie[]> {
    return this.http.get<Movie[]>(this.urlMovie).pipe(
      map((res: Movie[]) => {
        {
          res = res.filter((e) => e.isPlaylist === true);
          return res;
        }
      })
    );
  }

  getMovieHome(): Observable<Movie[]> {
    return this.http.get<Movie[]>(this.urlMovie).pipe(
      map((res: Movie[]) => {
        {
          res = res.filter((e) => e.isHome === true);
          return res;
        }
      })
    );
  }

}
