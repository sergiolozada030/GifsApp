import { Component, Input, OnInit } from '@angular/core';
import { GifsService } from 'src/app/gifs/services/gifs.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css'],
})
export class SidebarComponent implements OnInit {
  constructor(private gifsService: GifsService) {}

  get historial() {
    return this.gifsService.historial;
  }

  ngOnInit(): void {}

  buscarGif(termino: string) {
    this.gifsService.buscarGifs(termino);
  }

  borrarHistorial() {
    console.log('Borrar press');
    this.gifsService.borrarHistorial();
  }
}
