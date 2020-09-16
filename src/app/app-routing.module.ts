import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./pages/adjutar-img/adjutar-img.module').then( m => m.AdjutarImgPageModule)
  },
  {
    path: '',
    redirectTo: 'adjutar-img',
    pathMatch: 'full'
  },
  {
    path: 'ficha-personal',
    loadChildren: () => import('./pages/ficha-personal/ficha-personal.module').then( m => m.FichaPersonalPageModule)
  },
  {
    path: 'principal',
    loadChildren: () => import('./pages/principal/principal.module').then( m => m.PrincipalPageModule)
  },
  {
    path: 'convenio-gas',
    loadChildren: () => import('./pages/inicio-convenios/convenio-gas/convenio-gas.module').then( m => m.ConvenioGasPageModule)
  },
  {
    path: 'inicio-convenios',
    loadChildren: () => import('./pages/inicio-convenios/inicio-convenios.module').then( m => m.InicioConveniosPageModule)
  },
  {
    path: 'prueba-video',
    loadChildren: () => import('./pages/prueba-video/prueba-video.module').then( m => m.PruebaVideoPageModule)
  },
  {
    path: 'abastible',
    loadChildren: () => import('./pages/inicio-convenios/convenio-gas/abastible/abastible.module').then( m => m.AbastiblePageModule)
  },
  {
    path: 'gasco',
    loadChildren: () => import('./pages/inicio-convenios/convenio-gas/gasco/gasco.module').then( m => m.GascoPageModule)
  },
  {
    path: 'adjutar-img',
    loadChildren: () => import('./pages/adjutar-img/adjutar-img.module').then( m => m.AdjutarImgPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
