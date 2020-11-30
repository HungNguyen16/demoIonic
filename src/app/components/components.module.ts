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
import { ListCheckboxComponent } from './list-checkbox/list-checkbox.component';
import { ListRadioComponent } from './list-radio/list-radio.component';
import { ModalFinishComponent } from './modal-finish/modal-finish.component';
import { HeaderOneComponent } from './header-one/header-one.component';
import { RelationPhonesComponent } from './relation-phones/relation-phones.component';
import { ChoosePriceComponent } from './choose-price/choose-price.component';
import { HotMenuComponent } from './hot-menu/hot-menu.component';
import { FacilityComponent } from './facility/facility.component';
import { PaymentComponent } from './payment/payment.component';
import { ShowPopupComponent } from './show-popup/show-popup.component';
import { MessageSuccessComponent } from './message-success/message-success.component';
import { RentalContentComponent } from './rental-content/rental-content.component';
import { PopupSuccessComponent } from './popup-success/popup-success.component';

@NgModule({
    declarations: [
      HeaderComponent,
      FooterComponent,
      BannerComponent,
      MenuComponent,
      TabComponent,
      SliderComponent,
      ListMusicComponent,
      ListCheckboxComponent,
      ListRadioComponent,
      ModalFinishComponent,
      HeaderOneComponent,
      RelationPhonesComponent,
      ChoosePriceComponent,
      HotMenuComponent,
      FacilityComponent,
      PaymentComponent,
      ShowPopupComponent,
      MessageSuccessComponent,
      RentalContentComponent,
      PopupSuccessComponent
    ],
    exports: [
      HeaderComponent,
      FooterComponent,
      BannerComponent,
      MenuComponent,
      TabComponent,
      SliderComponent,
      ListMusicComponent,
      ListCheckboxComponent,
      ListRadioComponent,
      ModalFinishComponent,
      HeaderOneComponent,
      RelationPhonesComponent,
      ChoosePriceComponent,
      HotMenuComponent,
      FacilityComponent,
      PaymentComponent,
      ShowPopupComponent,
      MessageSuccessComponent,
      RentalContentComponent,
      PopupSuccessComponent
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
