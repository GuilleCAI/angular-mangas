import { Capitulo } from './capitulo';

export class Imagen {
    capitulo: Capitulo;
    id: string;
    numero: string;
    url: string;
    imagen: object;
    incluir: boolean;

    constructor() {
        this.capitulo = new Capitulo();
    }

    toString() {
        var builder = "";
        if (this.capitulo != null) {
            builder = builder + "capitulo=";
            builder = builder + this.capitulo;
            builder = builder + ", ";
        }
        if (this.numero != null) {
            builder = builder + "numero=";
            builder = builder + this.numero;
            builder = builder + ", ";
        }
        if (this.url != null) {
            builder = builder + "url=";
            builder = builder + this.url;
            builder = builder + ", ";
        }
        if (this.url != null) {
            builder = builder + "url=";
            builder = builder + this.url;
            builder = builder + ", ";
        }
        if (this.imagen != null) {
            builder = builder + "imagen=";
            builder = builder + this.imagen;
            builder = builder + ", ";
        }
        if (this.incluir != null) {
            builder = builder + "incluir=";
            builder = builder + this.incluir;
            builder = builder + ", ";
        }
        if (builder.length > 0) {
            builder = builder.substring(0, builder.length - 2);
        }
        return "Imagen [" + builder + "]";
    }
}