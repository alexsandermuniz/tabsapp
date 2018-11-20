import { Component } from '@angular/core';
import { CartaoPage } from '../cartao/cartao';
import { HomePage } from '../home/home';
import { OrcamentoPage } from '../orcamento/orcamento';
import { GraficosPage } from '../graficos/graficos';
import { DespesaPage } from '../despesa/despesa';
import { ContaPage } from '../conta/conta';


@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = HomePage;
  tab2Root = ContaPage;
  tab3Root = CartaoPage;
  tab4Root = OrcamentoPage;
  tab5Root = DespesaPage;
  tab6Root = GraficosPage;

  constructor() {

  }
}
