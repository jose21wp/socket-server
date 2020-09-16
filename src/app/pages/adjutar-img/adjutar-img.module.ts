import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AdjutarImgPageRoutingModule } from './adjutar-img-routing.module';

import { AdjutarImgPage } from './adjutar-img.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AdjutarImgPageRoutingModule
  ],
  declarations: [AdjutarImgPage]
})
export class AdjutarImgPageModule {}
