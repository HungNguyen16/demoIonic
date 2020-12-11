import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RegisterHistoryPageRoutingModule } from './register-history-routing.module';

import { RegisterHistoryPage } from './register-history.page';
import { ComponentsModule } from 'src/app/components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RegisterHistoryPageRoutingModule,
    ComponentsModule
  ],
  declarations: [RegisterHistoryPage]
})
export class RegisterHistoryPageModule {}
