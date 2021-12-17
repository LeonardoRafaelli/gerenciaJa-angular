import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainPageComponent } from './main-page/main-page.component';
import { LoginModule } from '../login/login.module';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    CommonModule,
    LoginModule,
    RouterModule.forRoot([
      {
        path: 'main-page',
        component: MainPageComponent,
        canActivate: []
      }
    ])
  ],
  declarations: [MainPageComponent],
})
export class TelaPrincipalModule { }
