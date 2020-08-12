import { NgModule,  } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { HomePage } from './home.page';
import { HomePageRoutingModule } from './home-routing.module';
import { NoticiaFilterPipe } from '../pipes/noticia-filter.pipe';
import { CategoriaFilterPipe } from '../pipes/categoria-filter.pipe';



@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule.forRoot(),
    HomePageRoutingModule
    ],
  declarations: [HomePage, NoticiaFilterPipe, CategoriaFilterPipe]
})
export class HomePageModule {}
