import { ListMusicComponent } from './list-music/list-music.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HeaderComponent } from './header/header.component';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { HttpClientModule } from '@angular/common/http';
import { SliderComponent } from './slider/slider.component';
import { HeaderOneComponent } from './header-one/header-one.component';
import { RelationPhonesComponent } from './relation-phones/relation-phones.component';
import { ChoosePriceComponent } from './choose-price/choose-price.component';
import { HotMenuComponent } from './hot-menu/hot-menu.component';
import { FacilityComponent } from './facility/facility.component';
import { PackDataComponent } from './pack-data/pack-data.component';
import { PromotionComponent } from './promotion/promotion.component';
import { CategoryHomeComponent } from './category-home/category-home.component';
import { PaymentComponent } from './payment/payment.component';
import { ShowPopupComponent } from './show-popup/show-popup.component';
import { RentalContentComponent } from './rental-content/rental-content.component';
import { CategoryAllComponent } from './category-all/category-all.component';
import { PlayListComponent } from './play-list/play-list.component';
import { CategorySingleComponent } from './category-single/category-single.component';
import { MyVoucherComponent } from './loyalty-page/my-voucher/my-voucher.component';
import { LoyaltyComponent } from './loyalty-page/loyalty/loyalty.component';
import { ContactUsComponent } from './support-page/contact-us/contact-us.component';
import { FaqComponent } from './support-page/faq/faq.component';
import { SimRegistrationComponent } from './support-page/sim-registration/sim-registration.component';
import { ConfirmOtpComponent } from './service-page/confirm-otp/confirm-otp.component';
import { NetworkSwitchComponent } from './service-page/network-switch/network-switch.component';
import { ConfirmInfoComponent } from './support-page/confirm-info/confirm-info.component';

@NgModule({
  declarations: [
    HeaderComponent,
    SliderComponent,
    ListMusicComponent,
    HeaderOneComponent,
    RelationPhonesComponent,
    ChoosePriceComponent,
    HotMenuComponent,
    FacilityComponent,
    PackDataComponent,
    PromotionComponent,
    CategoryHomeComponent,
    PaymentComponent,
    ShowPopupComponent,
    RentalContentComponent,
    CategoryAllComponent,
    PlayListComponent,
    CategorySingleComponent,
    MyVoucherComponent,
    LoyaltyComponent,
    ContactUsComponent,
    FaqComponent,
    SimRegistrationComponent,
    ConfirmOtpComponent,
    NetworkSwitchComponent,
    ConfirmInfoComponent
  ],
  exports: [
    HeaderComponent,
    SliderComponent,
    ListMusicComponent,
    HeaderOneComponent,
    RelationPhonesComponent,
    ChoosePriceComponent,
    HotMenuComponent,
    FacilityComponent,
    PackDataComponent,
    PromotionComponent,
    CategoryHomeComponent,
    PaymentComponent,
    ShowPopupComponent,
    RentalContentComponent,
    CategoryAllComponent,
    PlayListComponent,
    CategorySingleComponent,
    MyVoucherComponent,
    LoyaltyComponent,
    ContactUsComponent,
    FaqComponent,
    ConfirmOtpComponent,
    SimRegistrationComponent,
    NetworkSwitchComponent,
    ConfirmInfoComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    IonicModule,
    HttpClientModule
  ],
  providers: [
  ]
})
export class ComponentsModule {
}
