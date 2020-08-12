import { Pipe, PipeTransform } from '@angular/core';
import { Noticia } from '../interfaces/noticia';

@Pipe({
  name: 'categoriaFilter'
})
export class CategoriaFilterPipe implements PipeTransform {

  transform(noticias: Noticia[], filterBy: string): Noticia[] {
    const filter = filterBy ? filterBy.toLocaleLowerCase() : null;
    return filter ? noticias.filter(news => news.categoria.toLocaleLowerCase().includes(filter)) : noticias;
  }
}
