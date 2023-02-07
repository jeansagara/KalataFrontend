import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { VotePageRoutingModule } from './vote-routing.module';
import { VotePage } from './vote.page';
import { Ng2SearchPipeModule } from 'ng2-search-filter';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    VotePageRoutingModule,
    Ng2SearchPipeModule
  ],
  declarations: [VotePage]
})
export class VotePageModule {}
