import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';

export interface Algoritmos {
  position: number;
  algoritmo: string;
  codigo: string;
}

@Component({
  selector: 'app-linguagem-c',
  templateUrl: './linguagem-c.component.html',
  styleUrls: ['./linguagem-c.component.scss']
})
export class LinguagemCComponent implements OnInit {

  displayedColumns: string[] = ['position', 'algoritmo', 'codigo'];
  dataSource = new MatTableDataSource(algoritmosData);

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  constructor() { }

  ngOnInit(): void {
  }

}

const positionElement = [1, 2, 3]

const algoritmosName = [
  'teste1',             //1
  'teste2',             //2
  'teste3'              //3
]

const algoritmosCode = [
  'code1', 
  'code2', 
  'code3'
]

const algoritmosData: Algoritmos[] = [
  {position: positionElement[0], algoritmo: algoritmosName[0], codigo: algoritmosCode[0]},
  {position: positionElement[1], algoritmo: algoritmosName[1], codigo: algoritmosCode[1]},
  {position: positionElement[2], algoritmo: algoritmosName[2], codigo: algoritmosCode[2]}
];
