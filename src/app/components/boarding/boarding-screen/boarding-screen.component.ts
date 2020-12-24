import { Component, OnInit, ViewChild } from '@angular/core';
import { IonSlides } from '@ionic/angular';

@Component({
  selector: 'app-boarding-screen',
  templateUrl: './boarding-screen.component.html',
  styleUrls: ['./boarding-screen.component.scss'],
})
export class BoardingScreenComponent implements OnInit {
  @ViewChild(IonSlides) slides: IonSlides;

  sliderOptions = {
    slidesPerView: 1,
    initialSlide: 1,
    speed: 800,
    on: {
      ionSlideTransitionStart() {
        console.log('next start');
      }, ionSlideTransitionEnd() {
        console.log('next end');
      }
    }
  };
  constructor() { }

  ngOnInit() {}

  next() {
    this.slides.slideNext();
  }

}
