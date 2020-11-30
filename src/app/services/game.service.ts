import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/internal/operators/map';
import { GameModel, Game } from '../models/game-model';

@Injectable({
  providedIn: 'root',
})
export class GameService {
  public url = 'assets/data/data-game.json';
  public urlMovie = 'assets/data/data-game-basic.json';
  constructor(private http: HttpClient) { }

  getAll(): Observable<GameModel[]> {
    return this.http.get<GameModel[]>(this.url).pipe(
      map((res: GameModel[]) => {
        {
          return res;
        }
      })
    );
  }

  getPlayList(): Observable<Game[]> {
    return this.http.get<Game[]>(this.urlMovie).pipe(
      map((res: Game[]) => {
        {
          res = res.filter((e) => e.isPlaylist === true);
          return res;
        }
      })
    );
  }

  getMovieHome(): Observable<Game[]> {
    return this.http.get<Game[]>(this.urlMovie).pipe(
      map((res: Game[]) => {
        {
          res = res.filter((e) => e.isHome === true);
          return res;
        }
      })
    );
  }

}
