import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AbastiblePage } from './abastible.page';

const routes: Routes = [
  {
    path: '',
    component: AbastiblePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AbastiblePageRoutingModule {}
