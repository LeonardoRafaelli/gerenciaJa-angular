import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LogarComponent } from './logar/logar.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [LogarComponent],
  exports: [LogarComponent]
})
export class LoginModule { }
