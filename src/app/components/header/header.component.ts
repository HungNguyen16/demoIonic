import { Component, Input, OnInit } from '@angular/core';
import { Banner } from 'src/app/models/banner';
import { BannerService } from 'src/app/services/banner.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {

  @Input() public title: string;
  // @Input() 
  // get title(): string {return this._title};
  // private _title = '';
  constructor(private bannerService: BannerService) { }

  ngOnInit() {}

}
