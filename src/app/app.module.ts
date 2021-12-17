import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';

import { TelaPrincipalModule } from './tela-principal/tela-principal.module';
import { MainPageComponent } from './tela-principal/main-page/main-page.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    TelaPrincipalModule,
    RouterModule.forRoot([
      {
        path: '',
        component: MainPageComponent,
        canActivate: []
      }
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
