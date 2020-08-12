import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { EventosShowComponent } from './eventos-show/eventos-show.component';
import { EventFilterPipe } from './pipes/event-filter.pipe';
import { EventoItemComponent } from './evento-item/evento-item.component';
import { EventoAddComponent } from './evento-add/evento-add.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { BaseUrlInterceptor } from './interceptors/base-url.interceptor';
import { RouterModule, Route } from '@angular/router';
import { EventoDetailComponent } from './evento-detail/evento-detail.component';
import { LeavePageService } from './guards/leave-page.service';
import { SaveChangesGuard } from './guards/save-changes-guard';
import { MinDateDirective } from './validators/min-date.directive';

const APP_ROUTES: Route[] = [
  { path: 'eventos', component: EventosShowComponent },
  { path: 'eventos/add', component: EventoAddComponent,  canDeactivate: [SaveChangesGuard] },
  // :id es un parámetro (id del producto)
  { path: 'eventos/:id', component: EventoDetailComponent},
  // Ruta por defecto (vacía) -> Redirigir a /welcome
  { path: '', redirectTo: '/eventos', pathMatch: 'full' },
  // Ruta que no coincide con ninguna de las anteriores
  { path: '**', redirectTo: '/eventos', pathMatch: 'full' }
];

@NgModule({
  declarations: [
    AppComponent,
    EventosShowComponent,
    EventFilterPipe,
    EventoItemComponent,
    EventoAddComponent,
    EventoDetailComponent,
    MinDateDirective
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot(APP_ROUTES)
  ],
  providers: [{
    provide: HTTP_INTERCEPTORS,
    useClass: BaseUrlInterceptor,
    multi: true,
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
