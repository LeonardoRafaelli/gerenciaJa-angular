import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})
export class MainPageComponent implements OnInit {

  constructor(
    private route: Router
  ) { }

  ngOnInit() {
  }

  logOut(){
    localStorage.removeItem("USERNAME");
    localStorage.removeItem("PASSWORD");
    this.route.navigate([''])
  }

  toPedidos(){
    this.route.navigate(['/pedidos'])
  }

  toProdutos(){
    this.route.navigate(['/produtos'])
  }

}
