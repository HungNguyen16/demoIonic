import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LiveChatComponent } from 'src/app/components/support-page/live-chat/live-chat.component';
import { ConfirmInfoComponent } from 'src/app/components/utility-page/confirm-info/confirm-info.component';
import { ConfirmOtpComponent } from 'src/app/components/utility-page/confirm-otp/confirm-otp.component';
import { NetworkSwitchComponent } from 'src/app/components/utility-page/network-switch/network-switch.component';
import { RegisterInfoSubscriptionComponent } from 'src/app/components/utility-page/utility-page-full/register-info-subscription/register-info-subscription.component';

import { ApplicationRatingPage } from './application-rating.page';

const routes: Routes = [
  {
    path: '',
    component: ApplicationRatingPage,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ApplicationRatingPageRoutingModule {}
