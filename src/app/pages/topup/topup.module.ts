import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TopupPageRoutingModule } from './topup-routing.module';

import { TopupPage } from './topup.page';
import { ComponentsModule } from 'src/app/components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TopupPageRoutingModule,
    ComponentsModule
  ],
  declarations: [TopupPage]
})
export class TopupPageModule {}
