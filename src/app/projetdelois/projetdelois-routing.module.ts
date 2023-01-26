import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProjetdeloisPage } from './projetdelois.page';

const routes: Routes = [
  {
    path: '',
    component: ProjetdeloisPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProjetdeloisPageRoutingModule {}
