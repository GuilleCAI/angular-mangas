import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { MensajesState } from './mensajes';
import { StatusResponse } from 'src/app/models/base/statusResponse';

@Injectable({
    providedIn: 'root'
})
export class MensajesService {

    private mensajesSubject = new Subject<MensajesState>();
    mensajesState = this.mensajesSubject.asObservable();

    constructor() { }

    show(status: string, mensaje: string) {
        let tipo = "";
        switch (status) {
            case StatusResponse.exito:
                tipo = "success";
                break;
            case StatusResponse.info:
                tipo = "info";
                break;
            case StatusResponse.advertencia:
                tipo = "warning";
                break;
            default:
                tipo = "danger";
        }
        this.mensajesSubject.next(<MensajesState>{ show: true, tipo: tipo, mensaje: mensaje });
    }

    hide() {
        this.mensajesSubject.next(<MensajesState>{ show: false, tipo: "", mensaje: "" });
    }
}