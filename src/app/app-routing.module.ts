import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  // {
  //   path: '',
  //   redirectTo: 'projetdelois',
  //   pathMatch: 'full'
  // },
  {
    path: 'projetdelois',
    loadChildren: () => import('./projetdelois/projetdelois.module').then( m => m.ProjetdeloisPageModule)
  },
  

 
  {
    path: 'menu',
    loadChildren: () => import('./menu/menu.module').then( m => m.MenuPageModule)
  },
  

 
  {
    path: 'connexion',
    loadChildren: () => import('./connexion/connexion.module').then( m => m.ConnexionPageModule)
  },
  {
    path: 'inscription',
    loadChildren: () => import('./inscription/inscription.module').then( m => m.InscriptionPageModule)
  },
  
  {
    path: 'candidats',
    loadChildren: () => import('./candidats/candidats.module').then( m => m.CandidatsPageModule)
  },
  
  {
    path: 'resultats',
    loadChildren: () => import('./resultats/resultats.module').then( m => m.ResultatsPageModule)
  },
  {
    path: 'politique',
    loadChildren: () => import('./politique/politique.module').then( m => m.PolitiquePageModule)
  },

  {
    path: 'vote',
    loadChildren: () => import('./vote/vote.module').then( m => m.VotePageModule)
  },
  
  {
    path: 'projetdelois',
    loadChildren: () => import('./projetdelois/projetdelois.module').then( m => m.ProjetdeloisPageModule)
  },
  {
    path: 'resultatprolois',
    loadChildren: () => import('./resultatprolois/resultatprolois.module').then( m => m.ResultatproloisPageModule)
  },

  {
    path: 'categorievote',
    loadChildren: () => import('./categorievote/categorievote.module').then( m => m.CategorievotePageModule)
  },

  {
    path: '',
    loadChildren: () => import('./tabs/tabs.module').then( m => m.TabsPageModule)
  },






];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
