import { Component, Input, OnInit } from '@angular/core';
import { Banner } from '../../models/banner';
import { PageTypeEnum } from '../../models/enum/page-type-enum';
import { BannerService } from '../../services/banner.service';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.scss'],
})
export class BannerComponent implements OnInit {
  bannersList: Banner[] = [];
  typeEnum = PageTypeEnum;
  @Input() type: number;
  constructor(private bannerService: BannerService) { }

  ngOnInit() {
    this.BannerType(this.type);
    this.bannerService.getListByType(this.type).subscribe(res => {
      this.bannersList = res;
      console.log('banner a', this.bannersList);
    });
  }

  public BannerType(type?: number) {
    if (type === 1) {
      this.bannerService.getListByType(this.typeEnum.Cinema).subscribe(res => {
        this.bannersList = res;
        console.log('banner', this.bannersList);
      });
    } else if (type === 2) {
      this.bannerService.getListByType(this.typeEnum.Game).subscribe(res => {
        this.bannersList = res;
        console.log('banner', this.bannersList);
      });
    } else if (type === 3) {
      this.bannerService.getListByType(this.typeEnum.Sport).subscribe(res => {
        this.bannersList = res;
      });
    } else {
      this.bannerService.getListByType(this.typeEnum.Music).subscribe(res => {
        this.bannersList = res;
      });
    }
  }

}
