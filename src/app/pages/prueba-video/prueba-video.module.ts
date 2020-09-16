import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PruebaVideoPageRoutingModule } from './prueba-video-routing.module';

import { PruebaVideoPage } from './prueba-video.page';

import 'gl-ionic-background-video';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PruebaVideoPageRoutingModule
  ],
  declarations: [PruebaVideoPage],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class PruebaVideoPageModule {}
