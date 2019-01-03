import { Manga } from './manga';
import { Imagen } from './imagen';

export class Capitulo {
    manga: Manga;
    numero: string;
    codigo: string;
    url: string;
    visible: boolean;
    imagenes: Array<Imagen>;

    constructor() {
        this.manga = new Manga();
    }

    toString(): string {
        var builder = "";
        if (this.manga != null) {
            builder = builder + "manga=";
            builder = builder + this.manga;
            builder = builder + ", ";
        }
        if (this.numero != null) {
            builder = builder + "numero=";
            builder = builder + this.numero;
            builder = builder + ", ";
        }
        if (this.codigo != null) {
            builder = builder + "codigo=";
            builder = builder + this.codigo;
            builder = builder + ", ";
        }
        if (this.url != null) {
            builder = builder + "url=";
            builder = builder + this.url;
            builder = builder + ", ";
        }
        if (this.visible != null) {
            builder = builder + "visible=";
            builder = builder + this.visible;
            builder = builder + ", ";
        }
        if (this.imagenes != null) {
            builder = builder + "imagenes=";
            builder = builder + this.imagenes.length;
            builder = builder + ", ";
        }
        if (builder.length > 0) {
            builder = builder.substring(0, builder.length - 2);
        }
        //console.log("Capitulo [" + builder + "]");
        return "Capitulo [" + builder + "]";
    }
}