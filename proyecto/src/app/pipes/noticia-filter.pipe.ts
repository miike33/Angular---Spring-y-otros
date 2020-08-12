import { Pipe, PipeTransform } from '@angular/core';
import { Noticia } from '../interfaces/noticia';

@Pipe({
  name: 'noticiaFilter'
})
export class NoticiaFilterPipe implements PipeTransform {

  transform(noticias: Noticia[], filterBy: string): Noticia[] {
    const filter = filterBy ? filterBy.toLocaleLowerCase() : null;
    return filter ? noticias.filter(news => news.titulo.toLocaleLowerCase().includes(filter)) : noticias;
}

}
