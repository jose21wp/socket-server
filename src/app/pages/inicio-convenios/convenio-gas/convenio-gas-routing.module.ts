import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ConvenioGasPage } from './convenio-gas.page';

const routes: Routes = [
  {
    path: '',
    component: ConvenioGasPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ConvenioGasPageRoutingModule {}
