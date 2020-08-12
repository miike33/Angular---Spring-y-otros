import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AddNoticiaPage } from './add-noticia.page';

const routes: Routes = [
  {
    path: '',
    component: AddNoticiaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AddNoticiaPageRoutingModule {}
