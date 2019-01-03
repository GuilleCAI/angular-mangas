import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { MensajesService } from './mensajes.service';
import { MensajesState } from './mensajes';

@Component({
  selector: 'app-mensajes',
  templateUrl: './mensajes.component.html',
  styleUrls: ['./mensajes.component.css']
})
export class MensajesComponent implements OnInit, OnDestroy {

  show = false;
  tipo = "";
  mensaje = "";
  private subscription: Subscription;

  constructor(private mensajesService: MensajesService) { }

  ngOnInit() {
    this.subscription = this.mensajesService.mensajesState.subscribe((state: MensajesState) => {
      this.show = state.show;
      this.tipo = state.tipo;
      this.mensaje = state.mensaje;
    });
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}