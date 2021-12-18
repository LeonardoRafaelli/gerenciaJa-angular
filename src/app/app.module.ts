import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { LogarComponent } from './login/logar/logar.component';

import { TelaPrincipalModule } from './tela-principal/tela-principal.module';
import { ProdutosModule } from './produtos/produtos.module';
import { CarrinhoComponent } from './carrinho/carrinho.component';

@NgModule({
  declarations: [
    AppComponent,
    CarrinhoComponent
  ],
  imports: [
    BrowserModule,
    TelaPrincipalModule,
    ProdutosModule,
    RouterModule.forRoot([
      {
        path: '',
        component: LogarComponent,
        canActivate: []
      },
    ]),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
