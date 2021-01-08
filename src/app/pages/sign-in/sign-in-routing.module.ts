import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AccountLoginComponent } from 'src/app/components/boarding/account-login/account-login.component';
import { AccountRegisterComponent } from 'src/app/components/boarding/account-register/account-register.component';
import { SignInCurrentUserComponent } from 'src/app/components/boarding/sign-in-current-user/sign-in-current-user.component';
import { SignInNewUserComponent } from 'src/app/components/boarding/sign-in-new-user/sign-in-new-user.component';
import { SignInThreadingComponent } from 'src/app/components/boarding/sign-in-threading/sign-in-threading.component';
import { SignInPage } from './sign-in.page';


const routes: Routes = [
  {
    path: '',
    component: SignInPage,
  },
  {
    path: 'new-user',
    component: SignInNewUserComponent
  },
  {
    path: 'current-user',
    component: SignInCurrentUserComponent,
  },
  {
    path: 'login-account',
    component: AccountLoginComponent
  },
  {
    path: 'register-account',
    component: AccountRegisterComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SignInPageRoutingModule {}
