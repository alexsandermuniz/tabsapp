import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the ContaPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-conta',
  templateUrl: 'conta.html',
})
export class ContaPage {
	contas = [
    {
        'nome': 'Carteira',
        'escondida': '0',
        'valor': '2012'
    }, {
        'nome': 'Itau',
        'escondida': '1',
        'valor': '150'
    }
];
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ContaPage');
  }

}
