import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Edge2Component } from './edge2.component';

const routes: Routes = [
  {
    path: '',
    component: Edge2Component
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Edge2ComponentRoutingModule {}

