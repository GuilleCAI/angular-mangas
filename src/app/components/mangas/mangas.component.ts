import { Component, OnInit } from '@angular/core';

import { MangasService } from 'src/app/services/mangas.service';
import { StatusResponse } from 'src/app/models/base/statusResponse';
import { Converter } from 'src/app/utils/converter';

import { Formulario } from 'src/app/models/mangas/formulario';
import { Manga } from 'src/app/models/mangas/manga';
import { Capitulo } from 'src/app/models/mangas/capitulo';
import { Pendiente } from 'src/app/models/mangas/pendiente';

@Component({
  selector: 'app-mangas',
  templateUrl: './mangas.component.html',
  styleUrls: ['./mangas.component.css']
})
export class MangasComponent implements OnInit {

  modelo: Formulario = new Formulario(1);
  mangas: Array<Manga> = [];
  manga: Manga = new Manga();
  capitulos: Array<Capitulo> = [];
  capitulo: Capitulo = new Capitulo();
  pendientes: Array<Capitulo> = [];
  pendiente: Pendiente = new Pendiente();

  constructor(private mangasService: MangasService) {
    this.mangasService.getMangas().subscribe(response => {
      if (response.estado == StatusResponse.exito) {
        Converter.arrayToMangas(this.mangas, response.data["mangas"]);
      }
    });
  }

  ngOnInit() {
  }
}