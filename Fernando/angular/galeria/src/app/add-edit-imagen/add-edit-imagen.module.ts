import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AddEditImagenPageRoutingModule } from './add-edit-imagen-routing.module';

import { AddEditImagenPage } from './add-edit-imagen.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AddEditImagenPageRoutingModule
  ],
  declarations: [AddEditImagenPage]
})
export class AddEditImagenPageModule {}
