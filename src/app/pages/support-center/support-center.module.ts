import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SupportCenterPageRoutingModule } from './support-center-routing.module';

import { SupportCenterPage } from './support-center.page';
import { ComponentsModule } from 'src/app/components/components.module';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SupportCenterPageRoutingModule,
    ComponentsModule
  ],
  declarations: [SupportCenterPage]
})
export class SupportCenterPageModule {}
