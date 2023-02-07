import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TypedevotePage } from './typedevote.page';

const routes: Routes = [
  {
    path: '',
    component: TypedevotePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TypedevotePageRoutingModule {}
