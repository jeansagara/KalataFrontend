import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { ClassementPageRoutingModule } from './classement-routing.module';
import { ClassementPage } from './classement.page';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { RouterModule } from '@angular/router';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Ng2SearchPipeModule,
    ClassementPageRoutingModule,
    RouterModule
  ],
  declarations: [ClassementPage]
})
export class ClassementPageModule {}
