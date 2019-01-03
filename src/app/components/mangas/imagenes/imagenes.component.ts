import { Component, Input, OnInit } from '@angular/core';
import { saveAs } from 'file-saver';

import { MangasService } from 'src/app/services/mangas.service';

import { Formulario } from 'src/app/models/mangas/formulario';
import { Capitulo } from 'src/app/models/mangas/capitulo';
import { Pendiente } from 'src/app/models/mangas/pendiente';

@Component({
  selector: 'app-imagenes',
  templateUrl: './imagenes.component.html',
  styleUrls: ['./imagenes.component.css']
})
export class ImagenesComponent implements OnInit {

  @Input() modelo: Formulario;
  @Input() capitulo: Capitulo;
  @Input() pendientes: Array<Capitulo>;
  @Input() pendiente: Pendiente;

  constructor(private mangasService: MangasService) { }

  ngOnInit() {
  }

  generar(pendiente: boolean) {
    const _ang = this;
    if (pendiente || (_ang.capitulo != null && _ang.capitulo.imagenes != null && _ang.pendientes.indexOf(_ang.capitulo) < 0)) {
      if (!pendiente && _ang.pendientes.length == 0) {
        _ang.pendiente.actual = 0;
        _ang.pendiente.total = 1;
        _ang.pendientes.push(_ang.capitulo);
        _ang.capitulo.visible = false;
        _ang.mangasService.scrollCapitulo("ver", _ang.modelo.posicion + 1);
      } else if (!pendiente && _ang.pendientes.length != 0) {
        _ang.pendiente.total++;
        _ang.pendientes.push(_ang.capitulo);
        _ang.capitulo.visible = false;
        _ang.mangasService.scrollCapitulo("ver", _ang.modelo.posicion + 1);
        return;
      }
      _ang.mangasService.getPDF(_ang.pendientes[0]).subscribe(pdf => {
        saveAs(pdf, _ang.nombrePdf(_ang.pendientes[0]));
        _ang.pendientes.splice(0, 1);
        if (_ang.pendientes.length > 0) {
          _ang.pendiente.actual++;
          _ang.generar(true);
        }
      });
    }
  }

  nombrePdf(capitulo: Capitulo): string {
    let numero = "";
    while ((capitulo.numero.toString().length + numero.length) < 3) {
      numero = numero + "0";
    }
    return capitulo.manga.abreviacion + numero + capitulo.numero + ".pdf";
  }

  abrirModal(inicio: number) {
    this.modelo.imagen = inicio;
    this.mangasService.iniciarSlick(inicio);
  }
}