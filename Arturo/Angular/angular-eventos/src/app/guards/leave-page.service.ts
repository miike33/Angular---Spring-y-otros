import { Injectable } from '@angular/core';
import { CanDeactivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';
import { EventoAddComponent } from '../evento-add/evento-add.component';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LeavePageService implements CanDeactivate<EventoAddComponent>{

  constructor() { }
  canDeactivate(
    component: EventoAddComponent,
    currentRoute: ActivatedRouteSnapshot,
    currentState: RouterStateSnapshot,
    nextState?: RouterStateSnapshot
    ): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
    return confirm('¿Quienres abandonar la pagina?');
  }
}
