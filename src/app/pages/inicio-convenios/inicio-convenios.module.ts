import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { InicioConveniosPageRoutingModule } from './inicio-convenios-routing.module';

import { InicioConveniosPage } from './inicio-convenios.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    InicioConveniosPageRoutingModule
  ],
  declarations: [InicioConveniosPage]
})
export class InicioConveniosPageModule {}
