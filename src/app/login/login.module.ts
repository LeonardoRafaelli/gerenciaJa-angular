import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LogarComponent } from './logar/logar.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    FormsModule
  ],
  declarations: [LogarComponent],
  exports: [LogarComponent]
})
export class LoginModule { }
