import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ProjetdeloisPageRoutingModule } from './projetdelois-routing.module';

import { ProjetdeloisPage } from './projetdelois.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ProjetdeloisPageRoutingModule
  ],
  declarations: [ProjetdeloisPage]
})
export class ProjetdeloisPageModule {}
