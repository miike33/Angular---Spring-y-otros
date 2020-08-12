import { Injectable } from '@angular/core';
import { CanDeactivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { EventoAddComponent } from '../evento-add/evento-add.component';

@Injectable({
  providedIn: 'root'
})
export class SaveChangesGuard implements CanDeactivate<unknown> {

  constructor(private route: Router) { }

  canDeactivate(
    component: EventoAddComponent,
    currentRoute: ActivatedRouteSnapshot,
    currentState: RouterStateSnapshot,
    nextState?: RouterStateSnapshot): boolean {
    if (component.saved) {
      return true;
    }
    return confirm('¿Quienres salir?');
  }
}
