import { Component, OnInit } from '@angular/core';
import { CinemaModel, Movie } from '../../models/cinema-model';
import { CinemaService } from '../../services/cinema.service';

@Component({
  selector: 'app-itel-cinema',
  templateUrl: './itel-cinema.page.html',
  styleUrls: ['./itel-cinema.page.scss'],
})
export class ItelCinemaPage implements OnInit {
  cinemaData: CinemaModel[] = [];
  movieData: Movie[] = [];

  slideOptions = {
    slidesPerView: 1,
    initialSlide: 1,
    speed: 400,
    loop: true,
    spaceBetween: 20,
    loopAdditionalSlides: 1,
    on: {
      ionSlideTransitionStart() {
        console.log('next start');
      }, ionSlideTransitionEnd() {
        console.log('next end');
      }
    }
  };

  constructor(private cinemaService: CinemaService) { }

  ngOnInit() {
    this.cinemaService.getAll().subscribe(res => {
      this.cinemaData = res;
    });

    this.cinemaService.getPlayList().subscribe(res => {
      this.movieData = res;
      console.log(this.movieData);
    });

  }

}
