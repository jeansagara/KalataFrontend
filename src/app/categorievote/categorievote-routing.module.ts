import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CategorievotePage } from './categorievote.page';

const routes: Routes = [
  {
    path: '',
    component: CategorievotePage
  },
  {
    path: 'vote/:id',
    loadChildren: () => import('../vote/vote.module').then( m => m.VotePageModule)
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CategorievotePageRoutingModule {}
