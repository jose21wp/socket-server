import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PruebaVideoPage } from './prueba-video.page';

const routes: Routes = [
  {
    path: '',
    component: PruebaVideoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PruebaVideoPageRoutingModule {}
