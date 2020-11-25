import { ListMusicComponent } from './list-music/list-music.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { HttpClientModule } from '@angular/common/http';
import { BannerComponent } from './banner/banner.component';
import { MenuComponent } from './menu/menu.component';
import { TabComponent } from './tab/tab.component';
import { SliderComponent } from './slider/slider.component';

@NgModule({
    declarations: [
      HeaderComponent,
      FooterComponent,
      BannerComponent,
      MenuComponent,
      TabComponent,
      SliderComponent,
      ListMusicComponent
    ],
    exports: [
      HeaderComponent,
      FooterComponent,
      BannerComponent,
      MenuComponent,
      TabComponent,
      SliderComponent,
      ListMusicComponent
    ],
    imports: [
      CommonModule,
      RouterModule,
      FormsModule,
      IonicModule,
      HttpClientModule
    ],
    providers: [
      BannerComponent
    ]
})
export class ComponentsModule {
}
