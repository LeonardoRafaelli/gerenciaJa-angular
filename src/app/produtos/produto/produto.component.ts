import { Component, Input, OnInit } from '@angular/core';
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
  @Input() valor;

  constructor(
    private route: ActivatedRoute,
    private router: Router
  ) {
    this.idProduto = route.snapshot.paramMap.get('id');
    this.valor = this.idProduto;
  }

  ngOnInit() {
  }

  voltar(){
    this.router.navigate(['/produtos'])
  };

}
