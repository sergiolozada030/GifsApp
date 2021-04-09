import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { SearchGifsResponse, Data } from '../interfaces/gifs.interfaces';

@Injectable({
  providedIn: 'root',
})
export class GifsService {
  private apiKey: string = 'jf3FsKrKHX2MOM0zaIrNCaI0h9k4bMdX';
  private servicioUrl: string = 'https://api.giphy.com/v1/gifs';
  private _historial: string[] = [];
  public resultados: Data[] = [];

  get historial() {
    return [...this._historial];
  }
  constructor(private http: HttpClient) {
    // Cargando historial desde localStorage
    this._historial = JSON.parse(localStorage.getItem('historial')!) || [];
    // Cargando ultimos resultadso desde el localStorage
    this.resultados = JSON.parse(localStorage.getItem('resultados')!) || [];
    /*
      Manera larga de hacerlo 
      if (localStorage.getItem('historial')) {
      this._historial = JSON.parse(localStorage.getItem('historial')!);
    } */
  }

  buscarGifs(query: string) {
    query = query.trim().toLocaleLowerCase();

    if (!this._historial.includes(query)) {
      this._historial.unshift(query);
      this._historial = this._historial.splice(0, 10);
      localStorage.setItem('historial', JSON.stringify(this._historial));
    }

    localStorage.setItem('current', query);

    const params = new HttpParams()
      .set('api_key', this.apiKey)
      .set('q', query)
      .set('limit', '9');

    this.http
      .get<SearchGifsResponse>(`${this.servicioUrl}/search`, { params })
      .subscribe((resp: any) => {
        this.resultados = resp.data;
        localStorage.setItem('resultados', JSON.stringify(resp.data));
      });
  }

  borrarHistorial() {
    this._historial = [];
    this.resultados = [];
    localStorage.removeItem('historial');
    localStorage.removeItem('resultados');
  }
}
