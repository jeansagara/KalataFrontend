import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ResultatproloisPageRoutingModule } from './resultatprolois-routing.module';

import { ResultatproloisPage } from './resultatprolois.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ResultatproloisPageRoutingModule
  ],
  declarations: [ResultatproloisPage]
})
export class ResultatproloisPageModule {}
