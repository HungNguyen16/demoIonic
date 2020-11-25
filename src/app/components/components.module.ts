import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { ListComponent } from './list/list.component';
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
      ListComponent,
      BannerComponent,
      MenuComponent,
      TabComponent,
      SliderComponent
    ],
    exports: [
      HeaderComponent,
      FooterComponent,
      ListComponent,
      BannerComponent,
      MenuComponent,
      TabComponent,
      SliderComponent
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
