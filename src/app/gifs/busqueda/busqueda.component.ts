import {
  Component,
  ElementRef,
  OnInit,
  Output,
  ViewChild,
  EventEmitter,
} from '@angular/core';
import { GifsService } from '../services/gifs.service';

@Component({
  selector: 'app-busqueda',
  templateUrl: './busqueda.component.html',
  styleUrls: ['./busqueda.component.css'],
})
export class BusquedaComponent implements OnInit {
  @ViewChild('txtBuscar') txtBuscar!: ElementRef<HTMLInputElement>;

  constructor(private gifsService: GifsService) {}

  ngOnInit(): void {}

  buscar() {
    const termino = this.txtBuscar.nativeElement.value;

    if (termino.trim().length === 0) {
      return;
    }

    this.gifsService.buscarGifs(termino);
    this.txtBuscar.nativeElement.value = '';
  }
}
