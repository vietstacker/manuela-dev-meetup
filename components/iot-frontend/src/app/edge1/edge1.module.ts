import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Edge1ComponentRoutingModule } from './edge1-routing.module';

import { Edge1Component } from './edge1.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Edge1ComponentRoutingModule
  ],
  declarations: [Edge1Component]
})
export class Edge1ComponentModule {}