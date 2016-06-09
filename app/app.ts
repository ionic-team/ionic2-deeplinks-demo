import {ViewChild} from '@angular/core';

import {App, Platform, Nav, NavController} from 'ionic-angular';
import {StatusBar, Deeplinks} from 'ionic-native';
import {HomePage} from './pages/home/home';
import {AboutPage} from './pages/about/about';
import {ProductPage} from './pages/product/product';

@App({
  template: '<ion-nav [root]="rootPage"></ion-nav>',
  config: {} // http://ionicframework.com/docs/v2/api/config/Config/
})
export class MyApp {
  rootPage: any = HomePage;

  @ViewChild(Nav) navChild:Nav;

  constructor(private _platform: Platform) {
    this._platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      StatusBar.styleDefault();
    });
  }

  ngAfterViewInit() {
    this._platform.ready().then(() => {
      /*
      IonicDeeplink.route({
        '/about-us': AboutPage,
        '/universal-links-test': AboutPage,
        '/products/:productId': ProductPage
      }, function(match) {
        // Handle the route manually
      }, function(nomatch) {
        // No match
      })
      */

      // Convenience to route with a given nav
      Deeplinks.routeWithNavController(this.navChild, {
        '/about-us': AboutPage,
        '/universal-links-test': AboutPage,
        '/products/:productId': ProductPage
      }).subscribe((match) => {
        console.log('Successfully routed', match);
      }, (nomatch) => {
        console.warn('Unmatched Route', nomatch);
      });
    })
  }
}
