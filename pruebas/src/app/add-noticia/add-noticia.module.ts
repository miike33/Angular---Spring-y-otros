import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AddNoticiaPageRoutingModule } from './add-noticia-routing.module';

import { AddNoticiaPage } from './add-noticia.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AddNoticiaPageRoutingModule
  ],
  declarations: [AddNoticiaPage]
})
export class AddNoticiaPageModule {}
