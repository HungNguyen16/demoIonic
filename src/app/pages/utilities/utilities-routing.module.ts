import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ChoosePriceComponent } from 'src/app/components/choose-price/choose-price.component';
import { ShowPopupComponent } from 'src/app/components/show-popup/show-popup.component';
import { TakePhotoComponent } from 'src/app/components/support-page/take-photo/take-photo.component';
import { ChooseDocumentTypeComponent } from 'src/app/components/utility-page/choose-document-type/choose-document-type.component';
import { ConfirmInfoComponent } from 'src/app/components/utility-page/confirm-info/confirm-info.component';
import { IdentityCardComponent } from 'src/app/components/utility-page/identity-card/identity-card.component';
import { NetworkSwitchComponent } from 'src/app/components/utility-page/network-switch/network-switch.component';
import { RegisterInfoSubscriptionFinalComponent } from 'src/app/components/utility-page/utility-page-full/register-info-subscription-final/register-info-subscription-final.component';
import { RegisterInfoSubscriptionComponent } from 'src/app/components/utility-page/utility-page-full/register-info-subscription/register-info-subscription.component';
import { UtilitiesPageModule } from './utilities.module';

import { UtilitiesPage } from './utilities.page';

const routes: Routes = [
  {
    path: '',
    component: UtilitiesPage
  },
  {
    path: 'register-info',
    component: RegisterInfoSubscriptionComponent
  },
  {
    path: 'take-camera',
    component: ChooseDocumentTypeComponent
  },
  {
    path: 'submit-camera',
    component: IdentityCardComponent
  },
  {
    path: 'confirm-info',
    component: ConfirmInfoComponent
  },
  {
    path: 'register-info-next',
    component: RegisterInfoSubscriptionFinalComponent
  },
  {
    path: 'show-popup',
    component: ShowPopupComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UtilitiesPageRoutingModule {}
