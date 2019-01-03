import { Injectable } from '@angular/core';
import {
  HttpEvent,
  HttpInterceptor,
  HttpHandler,
  HttpRequest,
  HttpResponse
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import * as $ from 'jquery';

import { LoaderService } from 'src/app/components/loader/loader.service';
import { MensajesService } from 'src/app/components/mensajes/mensajes.service';
import { StatusResponse } from 'src/app/models/base/statusResponse';

@Injectable()
export class InterceptorService implements HttpInterceptor {

  cargasPendientes: Array<string> = [];
  skipLoader: Array<string> = ['http://localhost:7001/generador-web/mangas/generar'];

  constructor(private loaderService: LoaderService, private mensajesService: MensajesService) { }

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    //console.log("Enviando request");
    const startTime = Date.now();

    if ($.inArray(request.url, this.skipLoader) < 0) {
      this.loaderService.show();
      this.cargasPendientes.push(request.url);
    }

    request = request.clone({
      setHeaders: {
        'Content-Type': 'application/json; charset=utf-8',
        'Authorization': ''
        //,'USUARIO': 'guillermom'
      }
    });

    return next.handle(request).pipe(
      tap(event => {
        if (event instanceof HttpResponse) {
          //console.log("Recibiendo response");
          this.cargasPendientes.splice($.inArray(request.url, this.cargasPendientes), 1);
          if (this.cargasPendientes.length <= 0) {
            this.loaderService.hide();
          }
        }
      }, error => {
        //console.log("Error peticion");
        const elapsedTime = Date.now() - startTime;
        const message = request.method + "[" + request.urlWithParams + "] in[" + elapsedTime + "ms]";
        console.log(message + " message[" + error.message + "]");
        this.cargasPendientes.splice(0, this.cargasPendientes.length);
        this.loaderService.hide();
        if(error.status == 0){
          this.mensajesService.show(StatusResponse.error, "Sin conexion con el servidor");
        }
      })
    )
  };
}