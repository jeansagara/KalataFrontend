import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CategorievotePage } from './categorievote.page';

const routes: Routes = [
  {
    path: '',
    component: CategorievotePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CategorievotePageRoutingModule {}
