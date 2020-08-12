import { Usuario } from './usuario';

export interface Noticia {
    idNoticia?: number;
    categoria: string;
    titulo: string;
    contenido: string;
    imagen: string;
    dateAt: string;
    autor?: string;
    usuarios?: Usuario;
}

