import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastController } from '@ionic/angular';
import { CustomerRegisterModel } from 'src/app/models/customer-register-model';
import { CommonService } from 'src/app/services/common.service';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-account-register',
  templateUrl: './account-register.component.html',
  styleUrls: ['./account-register.component.scss'],
})
export class AccountRegisterComponent implements OnInit {
  signUpModel: CustomerRegisterModel = new CustomerRegisterModel();
  private redirectUrl = '';
  private signUpNowUrl = '';
  private processLogin = false;
  constructor(private loginService: LoginService, private router: Router, public toastController: ToastController) { }

  ngOnInit() {
    if (this.router.url === '/sign-in/login-account')  {
      this.redirectUrl = '/';
    }
    // if (this.router.url === '/dang-ky') {
    //   this.redirectUrl = '/';
    //   this.signUpNowUrl = '/dang-nhap';
    // }
   }
  signUpFunction(): any {
    if (this.processLogin) {
      return;
    }
    this.processLogin = true;
    this.signUpModel.Email = this.signUpModel.Email.trim();
    this.signUpModel.Password = this.signUpModel.Password.trim();
    const isError = this.isErrorValidationSignUp();
    if (isError) {
      this.processLogin = false;
      return;
    }
    // sign up user
    this.loginService.signUpUser(this.signUpModel, this.redirectUrl).then(() => {
      this.processLogin = false;
      console.log('register success');
    }).catch(() => this.processLogin = false);
    //  this.loginService.signInUser(this.loginModel, this.redirectUrl).then(() => {
    //   this.isProcessLogin = false;
    //   console.log('login success');
    // }).catch(
    //   () =>
    //     this.isProcessLogin = false
    // );
    // this.loginService.signUpUser(this.signUpModel, this.redirectUrl).then(() => {
    //   this.processLogin = false;
    // }).catch(() => this.processLogin = false);
  }
  isErrorValidationSignUp(): boolean {
    if (CommonService.isNullOrEmpty(this.signUpModel.Email)) {
      console.log('email drequired');
      // this.showToast.showError(ErrorHttpLanguageModels.emailRequired);
      return true;
    }
    if (!CommonService.isValidateEmail(this.signUpModel.Email)) {
      // this.showToast.showError(ErrorHttpLanguageModels.emailNotValid);
      console.log('email required');
      return true;
    }
    if (CommonService.isNullOrEmpty(this.signUpModel.Password)) {
      console.log('password required');
      // this.showToast.showError(ErrorHttpLanguageModels.passwordRequired);
      return true;
    }
  }
  signInNow(): any {
    this.router.navigateByUrl(this.signUpNowUrl);
  }
}
