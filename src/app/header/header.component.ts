import { Component, OnInit } from '@angular/core';

import { MatDialog } from '@angular/material/dialog';

import { ContatoComponent } from '../contato/contato.component';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor(public dialog: MatDialog) { }

  ngOnInit(): void {
  }

  openDialog() {
    this.dialog.open(ContatoComponent,{
      width: '1000px',
      height: '510px',
    });
  }

}
