import { Pipe, PipeTransform } from '@angular/core';
import {Evento} from 'src/app/interfaces/evento';
import { EventosShowComponent } from '../eventos-show/eventos-show.component';

@Pipe({
  name: 'eventFilter'
})
export class EventFilterPipe implements PipeTransform {

  transform(eventos: Evento[], search: string): Evento[] {
    if (!search) {
      return eventos;
    }
    return eventos.filter(e => e.name.toLocaleLowerCase().includes(search.toLocaleLowerCase()));
  }

}
