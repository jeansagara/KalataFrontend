import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ResultatproloisPage } from './resultatprolois.page';

const routes: Routes = [
  {
    path: '',
    component: ResultatproloisPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ResultatproloisPageRoutingModule {}
