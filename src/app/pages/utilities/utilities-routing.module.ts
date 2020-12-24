import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UtilitiesPageModule } from './utilities.module';

import { UtilitiesPage } from './utilities.page';

const routes: Routes = [
  {
    path: '',
    component: UtilitiesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UtilitiesPageRoutingModule {}
