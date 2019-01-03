import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import * as $ from 'jquery';
import 'slick-carousel';

import { AjaxResponse } from 'src/app/models/base/ajaxResponse';
import { Formulario } from 'src/app/models/mangas/formulario';
import { Capitulo } from 'src/app/models/mangas/capitulo';

@Injectable({
  providedIn: 'root'
})
export class MangasService {

  constructor(private http: HttpClient) { }

  getMangas() {
    return this.http.post<AjaxResponse>('http://localhost:7001/generador-web/mangas/mangas', null);
  }

  getCapitulos(modelo: Formulario) {
    const body = { metodo: modelo.metodo, manga: modelo.manga, inicio: modelo.inicio, fin: modelo.fin };
    const jBody = JSON.stringify(body);
    return this.http.post<AjaxResponse>('http://localhost:7001/generador-web/mangas/capitulos', jBody);
  }

  getImagenes(modelo: Formulario, capitulo: Capitulo) {
    const body = { metodo: modelo.metodo, manga: modelo.manga, capitulo: capitulo };
    const jBody = JSON.stringify(body);
    return this.http.post<AjaxResponse>('http://localhost:7001/generador-web/mangas/imagenes', jBody);
  }

  getPDF(capitulo: Capitulo) {
    const body = { metodo: capitulo.manga.tipo.codigo, manga: capitulo.manga.url, capitulo: capitulo };
    const jBody = JSON.stringify(body);
    return this.http.post('http://localhost:7001/generador-web/mangas/generar', jBody, { responseType: 'blob' });
  }

  scrollCapitulo(item: string, posicion: number) {
    setTimeout(() => {
      const elemento = $("#" + item + posicion);
      if (elemento.length > 0) {
        $("html,body").animate({ scrollTop: elemento.offset().top }, "fast");
        elemento.focus();
      }
    }, 0);
  }

  iniciarSlick(inicio: number) {
    setTimeout(() => {
      $('#slick').slick({
        infinite: true,
        initialSlide: inicio,
        slidesToShow: 1,
        slidesToScroll: 1,
        prevArrow: '<button type="button" class="slick-prev button is-primary is-outlined"><span class="icon"><i class="fas fa-chevron-circle-left"></i></span></button>',
        nextArrow: '<button type="button" class="slick-next button is-primary is-outlined"><span class="icon"><i class="fas fa-chevron-circle-right"></i></span></button>'
      });
    }, 50);
  }
}