import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ConfirmOtpComponent } from 'src/app/components/utility-page/confirm-otp/confirm-otp.component';
import { LiveChatComponent } from '../../components/support-page/live-chat/live-chat.component';

import { SupportCenterPage } from './support-center.page';

const routes: Routes = [
  {
    path: '',
    component: SupportCenterPage,
  },
  {
    path: 'live-chat',
    component: LiveChatComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SupportCenterPageRoutingModule {}
