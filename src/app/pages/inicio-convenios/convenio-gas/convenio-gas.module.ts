import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ConvenioGasPageRoutingModule } from './convenio-gas-routing.module';

import { ConvenioGasPage } from './convenio-gas.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ConvenioGasPageRoutingModule
  ],
  declarations: [ConvenioGasPage]
})
export class ConvenioGasPageModule {}
