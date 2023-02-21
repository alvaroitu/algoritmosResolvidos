import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import {MatToolbarModule} from '@angular/material/toolbar';
import { MatDialogModule } from "@angular/material/dialog";

import { HeaderComponent } from './header.component';

@NgModule({
  declarations: [
    HeaderComponent
  ],
  imports: [
    CommonModule,
    MatToolbarModule,
    RouterModule,
    MatDialogModule
  ],
  exports:[
    HeaderComponent
  ]
})
export class HeaderModule { }
