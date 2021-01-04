import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ApplicationRatingPageRoutingModule } from './application-rating-routing.module';

import { ApplicationRatingPage } from './application-rating.page';
import { ComponentsModule } from 'src/app/components/components.module';
import { RouterModule, Routes } from '@angular/router';
import { LiveChatComponent } from 'src/app/components/support-page/live-chat/live-chat.component';
import { ConfirmOtpComponent } from 'src/app/components/utility-page/confirm-otp/confirm-otp.component';
const routes: Routes = [
  {
    path: '',
    component: ApplicationRatingPage,
    children: [
      {
        path: 'chat',
        component: LiveChatComponent
      },
      {
        path: 'otp',
        component: ConfirmOtpComponent
      }
    ]
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ComponentsModule,
    RouterModule.forChild(routes)
  ],
  declarations: [ApplicationRatingPage]
})
export class ApplicationRatingPageModule {}
