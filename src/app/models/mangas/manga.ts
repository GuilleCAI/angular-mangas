import { Capitulo } from './capitulo';

export class Manga {
    id: number;
    tipo: { codigo: string, nombre: string, url: string };
    nombre: string;
    abreviacion: string;
    url: string;
    capitulos: Array<Capitulo>;

    constructor() {
        this.tipo = { codigo: null, nombre: null, url: null };
    }

    toString(): string {
        var builder = "";
        if (this.id != null) {
            builder = builder + "id=";
            builder = builder + this.id;
            builder = builder + ", ";
        }
        if (this.tipo != null) {
            builder = builder + "tipo=";
            builder = builder + Object.keys(this.tipo).length;
            builder = builder + ", ";
        }
        if (this.nombre != null) {
            builder = builder + "nombre=";
            builder = builder + this.nombre;
            builder = builder + ", ";
        }
        if (this.abreviacion != null) {
            builder = builder + "abreviacion=";
            builder = builder + this.abreviacion;
            builder = builder + ", ";
        }
        if (this.url != null) {
            builder = builder + "url=";
            builder = builder + this.url;
            builder = builder + ", ";
        }
        if (this.capitulos != null) {
            builder = builder + "capitulos=";
            builder = builder + this.capitulos.length;
            builder = builder + ", ";
        }
        if (builder.length > 0) {
            builder = builder.substring(0, builder.length - 2);
        }
        //console.log("Manga [" + builder + "]");
        return "Manga [" + builder + "]";
    }
}