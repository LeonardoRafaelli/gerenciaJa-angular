import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainPageComponent } from './main-page/main-page.component';
import { LoginModule } from '../login/login.module';

@NgModule({
  imports: [
    CommonModule,
    LoginModule
  ],
  declarations: [MainPageComponent],
})
export class TelaPrincipalModule { }
