import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { GascoPageRoutingModule } from './gasco-routing.module';

import { GascoPage } from './gasco.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    GascoPageRoutingModule
  ],
  declarations: [GascoPage]
})
export class GascoPageModule {}
