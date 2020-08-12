import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AddClientePageRoutingModule } from './add-cliente-routing.module';

import { AddClientePage } from './add-cliente.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AddClientePageRoutingModule
  ],
  declarations: [AddClientePage]
})
export class AddClientePageModule {}
