import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatCardModule } from '@angular/material/card';


import { ContatoComponent } from './contato.component';



@NgModule({
  declarations: [
    ContatoComponent
  ],
  imports: [
    CommonModule,
    MatCardModule
  ]
})
export class ContatoModule { }
