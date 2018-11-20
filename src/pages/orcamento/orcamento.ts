import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the OrcamentoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-orcamento',
  templateUrl: 'orcamento.html',
})
export class OrcamentoPage {
	orcamentos = [
	    {
	        'nome': 'FDS',
	        'valor': '95',
	        'valorSomado': '50',
	        'tipo': '1' 
	    }, {
	        'nome': 'Compras',
	        'valor': '20',
	        'valorSomado': '10',
	        'tipo': '1' 
	    }
	];
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad OrcamentoPage');
  }

}
