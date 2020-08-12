import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable, of } from 'rxjs';
import { Evento } from '../interfaces/evento';
import { EventosService } from '../services/eventos.service';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class EventoDetailResolve implements Resolve<Evento> {

  constructor(
    private eventosService: EventosService,
    private route: Router
  ) { }


  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Evento | Observable<Evento> | Promise<Evento> {
    return this.eventosService.getEvento(route.params.id).pipe(
      catchError(error => {
        this.route.navigate(['/eventos']);
        return of(null);
      })
    );
  }
}
