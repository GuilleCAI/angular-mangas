import { Component, Input, OnInit } from '@angular/core';

import { MangasService } from 'src/app/services/mangas.service';
import { StatusResponse } from 'src/app/models/base/statusResponse';

import { Formulario } from 'src/app/models/mangas/formulario';
import { Manga } from 'src/app/models/mangas/manga';
import { Capitulo } from 'src/app/models/mangas/capitulo';
import { Pendiente } from 'src/app/models/mangas/pendiente';

@Component({
  selector: 'app-capitulos',
  templateUrl: './capitulos.component.html',
  styleUrls: ['./capitulos.component.css']
})
export class CapitulosComponent implements OnInit {

  @Input() modelo: Formulario;
  @Input() manga: Manga;
  @Input() capitulos: Array<Capitulo>;
  @Input() pendientes: Array<Capitulo>;
  @Input() pendiente: Pendiente;

  constructor(private mangasService: MangasService) { }

  ngOnInit() {
  }
  
  ver(posicion: number) {
    const _ang = this;
    if (_ang.capitulos[_ang.modelo.posicion] != null) _ang.capitulos[_ang.modelo.posicion].visible = false;
    _ang.modelo.posicion = posicion;
    if (_ang.capitulos[posicion] != null) {
      if (_ang.capitulos[posicion].imagenes == null || _ang.capitulos[posicion].imagenes.length == 0) {
        _ang.mangasService.getImagenes(_ang.modelo, _ang.capitulos[posicion]).subscribe(response => {
          if (response.estado == StatusResponse.exito) {
            _ang.capitulos[posicion].imagenes = response.data["imagenes"];
            _ang.capitulos[posicion].visible = true;
            _ang.mangasService.scrollCapitulo("ocultar", posicion);
          }
        });
      }
      else {
        _ang.capitulos[posicion].visible = true;
        _ang.mangasService.scrollCapitulo("ocultar", posicion);
      }
    }
  }
}