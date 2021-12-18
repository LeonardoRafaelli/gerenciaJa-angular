import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Output, EventEmitter } from '@angular/core';


@Component({
  selector: 'app-produto',
  templateUrl: './produto.component.html',
  styleUrls: ['./produto.component.css']
})
export class ProdutoComponent implements OnInit {

  idProduto;

  @Output() onClick = new EventEmitter<any>();

  constructor(
    private route: ActivatedRoute,
    private router: Router
  ) {
    this.idProduto = route.snapshot.paramMap.get('id');
  }

  ngOnInit() {
  }

  voltar(){
    this.router.navigate(['/produtos'])
  };

  toShopCar(){
    alert("Produto Adicionado ao Carrinho");
    this.router.navigate(['/produtos'])
  }

}
