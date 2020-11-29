import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RechargeCardPage } from './recharge-card.page';

const routes: Routes = [
  {
    path: '',
    component: RechargeCardPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RechargeCardPageRoutingModule {}
