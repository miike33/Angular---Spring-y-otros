import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ActualizarClientePage } from './actualizar-cliente.page';

const routes: Routes = [
  {
    path: '',
    component: ActualizarClientePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ActualizarClientePageRoutingModule {}
