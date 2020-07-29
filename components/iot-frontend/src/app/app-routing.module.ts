import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then(m => m.HomePageModule)
  },
  // {
  //   path: 'edge1',
  //   loadChildren: () => import('./sensors/sensors.module').then( m => m.SensorsPageModule)
  // },
  {
    path: 'edge1',
    loadChildren: () => import('./edge1/edge1.module').then( m => m.Edge1ComponentModule)
  },
  {
    path: 'edge2',
    loadChildren: () => import('./edge2/edge2.module').then( m => m.Edge2ComponentModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
