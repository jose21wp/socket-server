import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { GascoPage } from './gasco.page';

const routes: Routes = [
  {
    path: '',
    component: GascoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class GascoPageRoutingModule {}
