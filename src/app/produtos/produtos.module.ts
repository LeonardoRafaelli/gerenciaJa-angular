import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProdutosComponent } from './produtos/produtos.component';
import { ProdutoComponent } from './produto/produto.component';
import { RouterModule } from '@angular/router';
import { CarrinhoComponent } from '../pedidos/carrinho/carrinho.component';


@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot([
      {path: 'produtos', children: [
        {path: '', component: ProdutosComponent},
        {path: ':id', component: ProdutoComponent}
      ]},
      {path: 'pedidos', component: CarrinhoComponent}
    ])
  ],
  declarations: [ProdutosComponent, ProdutoComponent, CarrinhoComponent]
})
export class ProdutosModule { }
