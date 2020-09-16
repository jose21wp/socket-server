import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FichaPersonalPage } from './ficha-personal.page';

const routes: Routes = [
  {
    path: '',
    component: FichaPersonalPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FichaPersonalPageRoutingModule {}
