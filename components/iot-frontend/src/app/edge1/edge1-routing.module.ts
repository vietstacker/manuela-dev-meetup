import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Edge1Component } from './edge1.component';

const routes: Routes = [
  {
    path: '',
    component: Edge1Component
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Edge1ComponentRoutingModule {}

