import {Component} from '@angular/core';
import {NavController} from 'ionic-angular';
import {ForgotPasswordPage} from '../forgot-password/forgot-password';
import {SignUpPage} from '../sign-up/sign-up';
import {MainTabsPage} from '../main-tabs/main-tabs';
import { Facebook, FacebookLoginResponse } from '@ionic-native/facebook';
/*
 Generated class for the LoginPage page.

 See http://ionicframework.com/docs/v2/components/#navigation for more info on
 Ionic pages and navigation.
 */
@Component({
  selector: 'page-login',
  templateUrl: 'login.html'
})
export class LoginPage {
  userData: any;
  constructor( public nav: NavController, private facebook: Facebook) {}

  // go to forgot password page
  forgotPwd() {
    this.nav.push(ForgotPasswordPage);
  }

  // process login
  fblogin ()
  {
    this.facebook.login( ['email', 'public_profile'] ).then( ( response: FacebookLoginResponse ) =>
    {
      this.facebook.api( 'me?fields=id,name,email,first_name,picture.width(720).height(720).as(picture_large)', [] ).then( profile =>
      {
        this.userData = { email: profile['email'], first_name: profile['first_name'], picture: profile['picture_large']['data']['url'], username: profile['name'] }
      } );
    } );
  }

  // go to sign up page
  signUp() {
    // add our sign up code here
    this.nav.push(SignUpPage);
  }
}
