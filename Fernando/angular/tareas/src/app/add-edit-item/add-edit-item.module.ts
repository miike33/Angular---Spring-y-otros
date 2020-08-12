import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AddEditItemPageRoutingModule } from './add-edit-item-routing.module';

import { AddEditItemPage } from './add-edit-item.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AddEditItemPageRoutingModule
  ],
  declarations: [AddEditItemPage]
})
export class AddEditItemPageModule {}
