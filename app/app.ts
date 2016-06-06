import {App, Platform} from 'ionic-angular';
import {StatusBar} from 'ionic-native';
import {HomePage} from './pages/home/home';

declare var IonicDeeplink:any;

@App({
  template: '<ion-nav [root]="rootPage"></ion-nav>',
  config: {} // http://ionicframework.com/docs/v2/api/config/Config/
})
export class MyApp {
  rootPage: any = HomePage;

  constructor(platform: Platform) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      StatusBar.styleDefault();

      console.log('Registering for deeplinks');
      IonicDeeplink.onDeepLink((event) => {
        console.log('Ionic DEEPLINK', event.url);
      })
      IonicDeeplink.onDeepLink((event) => {
        console.log('Ionic DEEPLINK #2', event.url);
      })
      IonicDeeplink.onDeepLink((event) => {
        console.log('Ionic DEEPLINK #3', event.url);
      })
    });
  }
}
