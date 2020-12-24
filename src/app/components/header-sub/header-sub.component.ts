import { Location, LocationStrategy, PathLocationStrategy } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
@Component({
  selector: 'app-header-sub',
  templateUrl: './header-sub.component.html',
  styleUrls: ['./header-sub.component.scss'],
  providers: [Location, {provide: LocationStrategy, useClass: PathLocationStrategy}]
})
export class HeaderSubComponent implements OnInit {
  @Input() title: string;

  constructor(private location: Location) { }

  ngOnInit() {}
  goBack() {
    this.location.back();
  }
  goForward() {
    this.location.forward();
  }
}
