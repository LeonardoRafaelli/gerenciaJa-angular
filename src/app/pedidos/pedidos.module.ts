import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CarrinhoComponent } from './carrinho/carrinho.component';
import { ProdutoComponent } from '../produtos/produto/produto.component';


@NgModule({
  imports: [
    CommonModule,
    ProdutoComponent
  ],
  declarations: [CarrinhoComponent, ProdutoComponent]
})

export class PedidosModule { }
