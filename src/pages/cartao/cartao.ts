import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the CartaoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-cartao',
  templateUrl: 'cartao.html',
})
export class CartaoPage {
	contas = [
	    {
	        'nome': 'Nubank',
	        'limite': '2300',
	        'valorGasto': '300',
	        'valorRestante': '2000'
	    },
	    {
	        'nome': 'Teste',
	        'limite': '2300',
	        'valorGasto': '300',
	        'valorRestante': '2000'
	    }
	];
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CartaoPage');
  }

}
