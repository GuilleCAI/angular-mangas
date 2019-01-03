import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { LoaderComponent } from './components/loader/loader.component';
import { MensajesComponent } from './components/mensajes/mensajes.component';
import { MangasComponent } from './components/mangas/mangas.component';
import { NotificacionComponent } from './components/mangas/notificacion/notificacion.component';
import { FiltrosComponent } from './components/mangas/filtros/filtros.component';
import { CapitulosComponent } from './components/mangas/capitulos/capitulos.component';
import { ImagenesComponent } from './components/mangas/imagenes/imagenes.component';
import { ModalComponent } from './components/mangas/modal/modal.component';

import { MangasService } from './services/mangas.service';

import { InterceptorService } from './interceptor/interceptor-service';

import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';
library.add(fas);

@NgModule({
  declarations: [
    AppComponent,
    LoaderComponent,
    MensajesComponent,
    MangasComponent,
    NotificacionComponent,
    FiltrosComponent,
    CapitulosComponent,
    ImagenesComponent,
    ModalComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FontAwesomeModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [InterceptorService, {
    provide: HTTP_INTERCEPTORS,
    useClass: InterceptorService,
    multi: true
  }, MangasService],
  bootstrap: [AppComponent]
})
export class AppModule { }
