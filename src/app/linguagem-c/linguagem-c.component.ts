import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';

export interface Algoritmos {
  numero: number;
  algoritmo: string;
  descricao: string;
  codigo: string;
}

@Component({
  selector: 'app-linguagem-c',
  templateUrl: './linguagem-c.component.html',
  styleUrls: ['./linguagem-c.component.scss']
})
export class LinguagemCComponent implements OnInit {

  displayedColumns: string[] = ['numero', 'algoritmo', 'descricao','codigo'];
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

const algoritmosDescription = [
  'descricao1',             //1
  'descricao2',             //2
  'descricao3'              //3
]

const algoritmosCode = [
  'code1', 
  'code2', 
  'code3'
]

const algoritmosData: Algoritmos[] = [
  {numero: positionElement[0], algoritmo: algoritmosName[0], descricao: algoritmosDescription[0], codigo: algoritmosCode[0]},
  {numero: positionElement[1], algoritmo: algoritmosName[1], descricao: algoritmosDescription[1], codigo: algoritmosCode[1]},
  {numero: positionElement[2], algoritmo: algoritmosName[2], descricao: algoritmosDescription[2], codigo: algoritmosCode[2]}
];
