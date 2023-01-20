import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CategorievotePageRoutingModule } from './categorievote-routing.module';

import { CategorievotePage } from './categorievote.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CategorievotePageRoutingModule
  ],
  declarations: [CategorievotePage]
})
export class CategorievotePageModule {}
