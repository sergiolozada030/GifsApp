import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-gifs-page',
  templateUrl: './gifs-page.component.html',
  styleUrls: ['./gifs-page.component.css'],
})
export class GifsPageComponent implements OnInit {
  newTermino: string = '';

  constructor() {}

  ngOnInit(): void {}

  newBusqueda(termino: string) {
    this.newTermino = termino;
    console.log(termino);
  }
}
