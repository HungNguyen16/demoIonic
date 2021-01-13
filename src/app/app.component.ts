import { Component, OnInit } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { CommonService } from './services/common.service';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent implements OnInit {
  public selectedIndex = -1;
  fullNameUser = '';
  isLogin = false;
  public appPages = [
    {
      title: 'Thông báo',
      url: '/notification',
      icon: 'notification'
    },
    {
      title: 'Nạp thẻ',
      url: '/recharge-card',
      icon: 'recharge-card'
    },
    {
      title: 'Tiện ích',
      url: '/utilities',
      icon: 'utilities'
    },
    {
      title: 'iTel game',
      url: '/itel-game',
      icon: 'game'
    },
    {
      title: 'iTel cinema',
      url: '/itel-cinema',
      icon: 'cinema'
    },
    {
      title: 'iTel sport',
      url: '/itel-sport',
      icon: 'sport'
    },
    {
      title: 'iTel music',
      url: '/itel-music',
      icon: 'music'
    },
    {
      title: 'Tra cước',
      url: '/postage',
      icon: 'postage'
    },
    {
      title: 'Lịch sử thanh toán',
      url: '/payment-history',
      icon: 'payment-history'
    },
    {
      title: 'Lịch sử đăng ký / hủy dịch vụ',
      url: '/register-history',
      icon: 'register-history'
    },
    {
      title: 'Trung tâm hỗ trợ',
      url: '/support-center',
      icon: 'support-center'
    },
    {
      title: 'Xếp hạng ứng dụng',
      url: '/application-rating',
      icon: 'application-rating'
    },
    {
      title: 'Đăng xuất',
      url: '/',
      icon: 'log-out'
    }
  ];
  public labels = ['Family', 'Friends', 'Notes', 'Work', 'Travel', 'Reminders'];

  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar
  ) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
      console.log('ready');
    });
  }

  ngOnInit() {
    this.fullNameUser = CommonService.getUserName();
    this.isLogin = CommonService.checkLogin();
  }
}
