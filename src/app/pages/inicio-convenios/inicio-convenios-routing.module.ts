import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { InicioConveniosPage } from './inicio-convenios.page';

const routes: Routes = [
  {
    path: '',
    component: InicioConveniosPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class InicioConveniosPageRoutingModule {}
