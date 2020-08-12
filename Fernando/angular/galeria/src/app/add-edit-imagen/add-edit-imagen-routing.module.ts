import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AddEditImagenPage } from './add-edit-imagen.page';

const routes: Routes = [
  {
    path: '',
    component: AddEditImagenPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AddEditImagenPageRoutingModule {}
