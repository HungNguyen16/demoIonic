import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { UtilitiesPageRoutingModule } from './utilities-routing.module';

import { UtilitiesPage } from './utilities.page';
import { ComponentsModule } from 'src/app/components/components.module';
import { PhoneNumberRegisterComponent } from '../../components/utility-page/phone-number-register/phone-number-register.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    UtilitiesPageRoutingModule,
    ComponentsModule,
  ],
  declarations: [UtilitiesPage]
})
export class UtilitiesPageModule {}
