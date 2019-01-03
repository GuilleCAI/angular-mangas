import { Component, Input, OnInit } from '@angular/core';

import { MangasService } from 'src/app/services/mangas.service';
import { StatusResponse } from 'src/app/models/base/statusResponse';
import { Converter } from 'src/app/utils/converter';

import { Formulario } from 'src/app/models/mangas/formulario';
import { Manga } from 'src/app/models/mangas/manga';
import { Capitulo } from 'src/app/models/mangas/capitulo';

@Component({
  selector: 'app-filtros',
  templateUrl: './filtros.component.html',
  styleUrls: ['./filtros.component.css']
})
export class FiltrosComponent implements OnInit {

  @Input() modelo: Formulario;
  @Input() mangas: Array<Manga>;
  @Input() manga: Manga;
  @Input() capitulos: Array<Capitulo>;

  constructor(private mangasService: MangasService) { }

  ngOnInit() {
  }

  buscar() {
    const _ang = this;
    const manga = _ang.mangas.filter(m => m.id == _ang.modelo.idManga)[0];
    if (manga != null) {
      Converter.limpiarArray(_ang.capitulos);
      _ang.modelo.metodo = manga.tipo.codigo;
      _ang.modelo.manga = manga.url;
      Converter.objectToManga(_ang.manga, manga);
      _ang.mangasService.getCapitulos(_ang.modelo).subscribe(response => {
        if (response.estado == StatusResponse.exito) {
          Converter.arrayToCapitulos(_ang.capitulos, response.data["capitulos"]);
          _ang.capitulos.forEach(function (c) {
            Converter.objectToManga(c.manga, manga);
          });
          _ang.modelo.posicion = 0;
          _ang.mangasService.scrollCapitulo("ver", 0);
        }
      });
    }
  }
}
