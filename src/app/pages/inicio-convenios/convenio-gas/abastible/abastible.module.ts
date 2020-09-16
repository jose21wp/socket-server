import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AbastiblePageRoutingModule } from './abastible-routing.module';

import { AbastiblePage } from './abastible.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AbastiblePageRoutingModule
  ],
  declarations: [AbastiblePage]
})
export class AbastiblePageModule {}
