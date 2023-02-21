import { MatCardModule } from '@angular/material/card';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AlgoritmosResolvidosComponent } from './algoritmos-resolvidos.component';


@NgModule({
  declarations: [
    AlgoritmosResolvidosComponent
  ],
  imports: [
    CommonModule,
    MatCardModule
  ]
})
export class AlgoritmosResolvidosModule { }
