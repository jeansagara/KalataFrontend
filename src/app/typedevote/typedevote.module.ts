import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TypedevotePageRoutingModule } from './typedevote-routing.module';

import { TypedevotePage } from './typedevote.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TypedevotePageRoutingModule
  ],
  declarations: [TypedevotePage]
})
export class TypedevotePageModule {}
