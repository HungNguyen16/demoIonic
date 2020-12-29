import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NetworkSwitchComponent } from 'src/app/components/utility-page/network-switch/network-switch.component';
import { UtilitiesPageModule } from './utilities.module';

import { UtilitiesPage } from './utilities.page';

const routes: Routes = [
  {
    path: '',
    component: UtilitiesPage,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UtilitiesPageRoutingModule {}
