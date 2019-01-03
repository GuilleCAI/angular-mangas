export class Formulario {
    idManga: number;
    metodo: string;
    manga: string;
    inicio: number;
    fin: number;
    posicion: number;
    imagen: number;

    constructor(idManga: number) {
        this.idManga = idManga;
        this.inicio = 1;
        this.fin = 1;
        this.posicion = 0;
        this.imagen = -1;
    }

    toString(): string {
        var builder = "";
        if (this.idManga != null) {
            builder = builder + "idManga=";
            builder = builder + this.idManga;
            builder = builder + ", ";
        }
        if (this.metodo != null) {
            builder = builder + "metodo=";
            builder = builder + this.metodo;
            builder = builder + ", ";
        }
        if (this.manga != null) {
            builder = builder + "manga=";
            builder = builder + this.manga;
            builder = builder + ", ";
        }
        if (this.inicio != null) {
            builder = builder + "inicio=";
            builder = builder + this.inicio;
            builder = builder + ", ";
        }
        if (this.fin != null) {
            builder = builder + "fin=";
            builder = builder + this.fin;
            builder = builder + ", ";
        }
        if (this.posicion != null) {
            builder = builder + "posicion=";
            builder = builder + this.posicion;
            builder = builder + ", ";
        }
        if (this.imagen != null) {
            builder = builder + "imagen=";
            builder = builder + this.imagen;
            builder = builder + ", ";
        }
        if (builder.length > 0) {
            builder = builder.substring(0, builder.length - 2);
        }
        //console.log("Formulario [" + builder + "]");
        return "Formulario [" + builder + "]";
    }
}