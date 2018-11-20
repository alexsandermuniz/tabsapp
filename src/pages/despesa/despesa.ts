import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the DespesaPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-despesa',
  templateUrl: 'despesa.html',
})
export class DespesaPage {
	items = [
    {
        'make': 'audi',
        'model': 'r8',
        'year': '2012'
    }, {
        'make': 'audi',
        'model': 'rs5',
        'year': '2013'
    }, {
        'make': 'ford',
        'model': 'mustang',
        'year': '2012'
    }, {
        'make': 'ford',
        'model': 'fusion',
        'year': '2015'
    }, {
        'make': 'kia',
        'model': 'optima',
        'year': '2012'
    },
];
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DespesaPage');
  }

}
