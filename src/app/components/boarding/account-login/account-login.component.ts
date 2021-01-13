import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastController } from '@ionic/angular';
import { LoginModel } from 'src/app/models/login-response-model';
import { CommonService } from 'src/app/services/common.service';
import { LoginService } from 'src/app/services/login.service';
import { ShowToastService } from 'src/app/services/show-toast.service';

@Component({
  selector: 'app-account-login',
  templateUrl: './account-login.component.html',
  styleUrls: ['./account-login.component.scss'],
})
export class AccountLoginComponent implements OnInit {
  loginModel: LoginModel = new LoginModel();
  private isProcessLogin = false;
  private redirectUrl = '';
  private signUpUrl = '';
  constructor(private loginService: LoginService,
              private router: Router,
              private showToastService: ShowToastService,
              public toastController: ToastController) { }

  ngOnInit() {
    if (this.router.url === '/home') {
      this.redirectUrl = '/';
    }
  }
  loginFunction(): any {
    if (this.isProcessLogin) {
      return;
    }
    this.isProcessLogin = true;
    const isError = this.isErrorValidationLogin();
    if (isError) {
      this.isProcessLogin = false;
      return;
    }
    // sign in user
    this.loginService.signInUser(this.loginModel, this.redirectUrl).then(() => {
      this.isProcessLogin = false;
      console.log('login success');
    }).catch(
      () =>
        this.isProcessLogin = false
    );
  }
  async isErrorValidationLogin(): Promise<boolean> {
    if (CommonService.isNullOrEmpty(this.loginModel.UserName)) {
      this.showToastService.showError();
      return true;
    }
    if (CommonService.isNullOrEmpty(this.loginModel.PassWord)) {
      this.showToastService.showError1();
      return true;
    }
  }

  onKeyDown(event): void {
    if (event.keyCode === 13) {
      this.loginFunction();
    }
  }
}
