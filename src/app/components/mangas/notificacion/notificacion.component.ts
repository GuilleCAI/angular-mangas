import { Component, Input, OnInit } from '@angular/core';

import { Capitulo } from 'src/app/models/mangas/capitulo';
import { Pendiente } from 'src/app/models/mangas/pendiente';

@Component({
  selector: 'app-notificacion',
  templateUrl: './notificacion.component.html',
  styleUrls: ['./notificacion.component.css']
})
export class NotificacionComponent implements OnInit {

  @Input() pendientes: Array<Capitulo>;
  @Input() pendiente: Pendiente;

  constructor() { }

  ngOnInit() {
  }
}