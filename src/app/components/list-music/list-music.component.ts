import { Component, OnInit } from '@angular/core';
import { ListMusic } from 'src/app/models/listMusic';
import { MusicListService } from 'src/app/services/music-list.service';

@Component({
  selector: 'app-list-music',
  templateUrl: './list-music.component.html',
  styleUrls: ['./list-music.component.scss'],
})
export class ListMusicComponent implements OnInit {

  musicsList: ListMusic[] = [];

  constructor(private musicListService: MusicListService) { }

  ngOnInit() {
    this.musicListService.getListByType().subscribe(res => {
      this.musicsList = res;
      console.log('music', this.musicsList);
    });
  }
}
