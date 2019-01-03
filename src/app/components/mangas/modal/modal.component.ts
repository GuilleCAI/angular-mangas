import { Component, Input, OnInit } from '@angular/core';

import { MangasService } from 'src/app/services/mangas.service';

import { Formulario } from 'src/app/models/mangas/formulario';
import { Capitulo } from 'src/app/models/mangas/capitulo';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent implements OnInit {

  @Input() modelo: Formulario;
  @Input() capitulos: Array<Capitulo>;

  constructor(private mangasService: MangasService) { }

  ngOnInit() {
  }
  
  cerrarModal() {
    this.modelo.imagen = -1;
    this.mangasService.scrollCapitulo("ocultar", this.modelo.posicion);
  }
}