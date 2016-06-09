import {Page, NavController, NavParams} from 'ionic-angular';

/*
  Generated class for the ProductPage page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Page({
  templateUrl: 'build/pages/product/product.html',
})
export class ProductPage {
  productId: string;
  
  constructor(public nav: NavController, private _params: NavParams) {
    this.productId = _params.get('productId');
  }
}
