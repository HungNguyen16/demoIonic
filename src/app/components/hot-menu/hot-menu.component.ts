import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-hot-menu',
  templateUrl: './hot-menu.component.html',
  styleUrls: ['./hot-menu.component.scss'],
})
export class HotMenuComponent implements OnInit {
  @Input() hotIndex: number;
  public hotMenus = [
    {
      title: 'Sim số',
      url: '/home',
      icon: 'phone'
    },{
      title: 'Music',
      url: '/itel-music',
      icon: 'music'
    },{
      title: 'Game',
      url: '/itel-game',
      icon: 'game'
    },{
      title: 'Cinema',
      url: '/itel-cinema',
      icon: 'cinema'
    },{
      title: 'Sport',
      url: '/itel-sport',
      icon: 'sport'
    }
  ]

  constructor() { }

  ngOnInit() {}

}
