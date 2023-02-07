import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TabsPage } from './tabs.page';


const routes: Routes = [
  {
    path: 'tabs',
    component: TabsPage,
    children :[
      {
        path: 'accueil',
        loadChildren: () => import('../accueil/accueil.module').then( m => m.AccueilPageModule)
      },
     

      {
        path: 'categorievote/:idtypevote',
        loadChildren: () => import('../categorievote/categorievote.module').then( m => m.CategorievotePageModule)
      },

      // {
      //   path: 'projetlois/:idtypevote',
      //   loadChildren: () => import('../categorievote/categorievote.module').then( m => m.CategorievotePageModule)
      // },

      {
        path: 'resultatprolois',
        loadChildren: () => import('../resultatprolois/resultatprolois.module').then( m => m.ResultatproloisPageModule)
      },

      {
        path: 'classement',
        loadChildren: () => import('../classement/classement.module').then( m => m.ClassementPageModule)
        },
        {
          path: 'typedevote',
          loadChildren: () => import('../typedevote/typedevote.module').then( m => m.TypedevotePageModule)
        },
      
        {
          path: 'vote/:id',
          loadChildren: () => import('../vote/vote.module').then( m => m.VotePageModule)
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
    redirectTo: 'tabs/accueil',
    pathMatch: 'full'
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TabsPageRoutingModule {}
