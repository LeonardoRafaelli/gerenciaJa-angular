import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-logar',
  templateUrl: './logar.component.html',
  styleUrls: ['./logar.component.css']
})

export class LogarComponent implements OnInit {

  constructor(
    private router: Router
  ) { }

  user = '';
  pass = '';

  users = [
    {username: 'leozin123', password: 'leozika'},
    {username: 'gustavin123', password: 'guszika'},
    {username: 'tavin123', password: 'tavinzika'}
  ]

  ngOnInit() {
  }

  logar(){
    for(let i of this.users){
      if(i.username == this.user && i.password == this.pass){
        localStorage.setItem("USERNAME", this.user);
        localStorage.setItem("PASSWORD",  this.pass);
        this.router.navigate(['/main-page/'])
      }
    }
  }

}
