import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CandidatsPage } from './candidats.page';

const routes: Routes = [
  {
    path: '',
    component: CandidatsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CandidatsPageRoutingModule {}
