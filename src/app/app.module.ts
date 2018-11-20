import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { CartaoPage } from '../pages/cartao/cartao';
import { ContaPage } from '../pages/conta/conta';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';
import { OrcamentoPage } from '../pages/orcamento/orcamento';
import { DespesaPage } from '../pages/despesa/despesa';
import { GraficosPage } from '../pages/graficos/graficos';


import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { SQLite } from '@ionic-native/sqlite'
import { DatabaseProvider } from '../providers/database/database';

@NgModule({
  declarations: [
    MyApp,
    ContaPage,
    CartaoPage,
    HomePage,
    TabsPage,
    OrcamentoPage,
    GraficosPage,
    DespesaPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    ContaPage,
    CartaoPage,
    HomePage,
    TabsPage,
    OrcamentoPage,
    GraficosPage,
    DespesaPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    SQLite,
    DatabaseProvider,
  ]
})
export class AppModule {}
