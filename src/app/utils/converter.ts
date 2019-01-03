import { Manga } from '../models/mangas/manga';
import { Capitulo } from '../models/mangas/capitulo';

export class Converter {

    static objectToManga(manga: Manga, objeto: Manga): Manga {
        if (objeto != null) {
            if (manga == null) {
                manga = new Manga();
            }
            manga.id = objeto.id;
            manga.tipo.codigo = objeto.tipo.codigo;
            manga.tipo.nombre = objeto.tipo.nombre
            manga.tipo.url = objeto.tipo.url;
            manga.nombre = objeto.nombre;
            manga.abreviacion = objeto.abreviacion;
            manga.url = objeto.url;
        }
        return manga;
    }

    static arrayToMangas(mangas: Array<Manga>, lista: Array<Manga>): Array<Manga> {
        if (lista == null || lista.length == 0) {
            mangas.splice(0, mangas.length);
        } else {
            lista.forEach(function (m) {
                mangas.push(Converter.objectToManga(null, m));
            });
        }
        return mangas;
    }

    static objectToCapitulo(capitulo: Capitulo, objeto: Capitulo): Capitulo {
        if (objeto != null) {
            if (capitulo == null) {
                capitulo = new Capitulo();
            }
            Converter.objectToManga(capitulo.manga, objeto.manga);
            capitulo.numero = objeto.numero;
            capitulo.codigo = objeto.codigo;
            capitulo.url = objeto.url;
            capitulo.visible = objeto.visible;
            capitulo.imagenes = objeto.imagenes;
        }
        return capitulo;
    }

    static arrayToCapitulos(capitulos: Array<Capitulo>, lista: Array<Capitulo>): Array<Capitulo> {
        if (lista == null || lista.length == 0) {
            capitulos.splice(0, capitulos.length);
        } else {
            lista.forEach(function (c) {
                capitulos.push(Converter.objectToCapitulo(null, c));
            });
        }
        return capitulos;
    }

    static limpiarArray(lista: Array<Object>) {
        if (lista != null) {
            lista.splice(0, lista.length);
        }
        return lista;
    }
}