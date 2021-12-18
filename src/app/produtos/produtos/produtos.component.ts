import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-produtos',
  templateUrl: './produtos.component.html',
  styleUrls: ['./produtos.component.css']
})
export class ProdutosComponent implements OnInit {

  constructor(
    private route: Router
  ) { }

  productsList = [
    1,2,3,4,5,6
  ]

  ngOnInit() {
  }

  abrirProduto(produto){
    this.route.navigate(['/produtos/', produto])
  }

  voltar(){
    this.route.navigate(['/main-page/'])
  }

}
