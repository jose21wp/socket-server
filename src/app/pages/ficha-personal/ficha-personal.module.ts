import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FichaPersonalPageRoutingModule } from './ficha-personal-routing.module';

import { FichaPersonalPage } from './ficha-personal.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FichaPersonalPageRoutingModule
  ],
  declarations: [FichaPersonalPage]
})
export class FichaPersonalPageModule {}
