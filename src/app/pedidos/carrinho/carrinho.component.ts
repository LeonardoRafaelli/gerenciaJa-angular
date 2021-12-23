import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-carrinho',
  templateUrl: './carrinho.component.html',
  styleUrls: ['./carrinho.component.css']
})
export class CarrinhoComponent implements OnInit {

  produtos = [];

  constructor() { }

  ngOnInit() {
    
  }

  pegarIdProduto(evento){
    console.log(evento);
    for(let i of evento){
      this.produtos.push(i.value)
    }
  }

}
