import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TabsPage } from './tabs.page';


const routes: Routes = [
  {
    path: 'tabs',
    component: TabsPage,
    children :[
      {
        path: 'connexion',
        loadChildren: () => import('../connexion/connexion.module').then( m => m.ConnexionPageModule)
      },
     

      {
        path: 'categorievote',
        loadChildren: () => import('../categorievote/categorievote.module').then( m => m.CategorievotePageModule)
      },

      {
        path: 'classement',
        loadChildren: () => import('../classement/classement.module').then( m => m.ClassementPageModule)
        },
      
        {
          path: '',
          redirectTo: 'tabs/accueil',
          pathMatch: 'full'
        }

        
    ]
    
  },
  {
    path: '',
    redirectTo: 'tabs/connexion',
    pathMatch: 'full'
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TabsPageRoutingModule {}
