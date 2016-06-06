import {Page, NavParams} from 'ionic-angular';

@Page({
  templateUrl: 'build/pages/about/about.html'
})
export class AboutPage {
  thing: string;
  
  constructor(navParams: NavParams) {
    this.thing = navParams.get('t');
  }
}
