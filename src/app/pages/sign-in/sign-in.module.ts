import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';
import { SignInPageRoutingModule } from './sign-in-routing.module';
import { SignInPage } from './sign-in.page';
import { ComponentsModule } from '../../components/components.module';
import { RouterModule } from '@angular/router';
import { AccountLoginComponent } from 'src/app/components/boarding/account-login/account-login.component';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    RouterModule,
    IonicModule,
    SignInPageRoutingModule,
    ComponentsModule,
  ],
  declarations: [
    SignInPage,
  ],
  exports: [
    SignInPage,
  ]
})
export class SignInPageModule {}
