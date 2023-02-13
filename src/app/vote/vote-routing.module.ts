import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { Ng2SearchPipeModule } from 'ng2-search-filter';

import { VotePage } from './vote.page';

const routes: Routes = [
  {
    path: '',
    component: VotePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes),Ng2SearchPipeModule,],
  exports: [RouterModule],
})
export class VotePageRoutingModule {}
