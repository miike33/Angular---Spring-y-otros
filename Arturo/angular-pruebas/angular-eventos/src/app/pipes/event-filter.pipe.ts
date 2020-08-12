import { Pipe, PipeTransform } from '@angular/core';
import { Evento } from '../interfaces/evento';

@Pipe({
  name: 'eventFilter'
})
export class EventFilterPipe implements PipeTransform {

  transform(eventos: Evento[], search: string): Evento[] {
    if (!search) {
      return eventos;
    }
    return eventos.filter(e => e.title.toLocaleLowerCase().includes(search.toLocaleLowerCase()));
  }

}
