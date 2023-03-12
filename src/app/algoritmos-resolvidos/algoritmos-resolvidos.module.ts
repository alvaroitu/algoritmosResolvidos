import { MatCardModule } from '@angular/material/card';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AlgoritmosResolvidosComponent } from './algoritmos-resolvidos.component';
import { MatToolbarModule } from '@angular/material/toolbar';


@NgModule({
  declarations: [
    AlgoritmosResolvidosComponent
  ],
  imports: [
    CommonModule,
    MatCardModule,
    MatToolbarModule
  ]
})
export class AlgoritmosResolvidosModule { }
