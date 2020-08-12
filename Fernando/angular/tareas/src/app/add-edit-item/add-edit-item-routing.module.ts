import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AddEditItemPage } from './add-edit-item.page';

const routes: Routes = [
  {
    path: '',
    component: AddEditItemPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AddEditItemPageRoutingModule {}
