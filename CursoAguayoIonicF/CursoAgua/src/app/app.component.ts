import { Component, ViewChild, OnInit } from '@angular/core';
import { Platform, Nav, NavController } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { HomePage } from '../pages/home/home';
import { UserService } from './services/user.services';
import { PrincipalPage } from '../pages/principal/principal';
@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage:any = HomePage;

  @ViewChild('NAV') nav: Nav;

  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen,private _userService: UserService) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
    });
    if (_userService.getIdentity()) {
      this.rootPage = PrincipalPage;
    } else {
      this.rootPage = HomePage;
    }  
  }

  goToPage(page) {
    this.nav.setRoot(page);
  }

  Logout() {
    this._userService.logout();
    this.nav.setRoot(HomePage);
  }
}

