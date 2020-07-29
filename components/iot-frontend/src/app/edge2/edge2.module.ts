import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Edge2ComponentRoutingModule } from './edge2-routing.module';

import { Edge2Component } from './edge2.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Edge2ComponentRoutingModule
  ],
  declarations: [Edge2Component]
})
export class Edge2ComponentModule {}