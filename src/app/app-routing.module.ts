import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'vote',
    pathMatch: 'full'
  },
  {
    path: 'vote',
    loadChildren: () => import('./vote/vote.module').then( m => m.VotePageModule)
  },

  // {
  //   path:'sideMenu', 
  //   loadChildren:()=> import('./side-menu/side-menu.component').then(m=> m.SideMenuComponent)
  // },
  {
    path: 'menu',
    loadChildren: () => import('./menu/menu.module').then( m => m.MenuPageModule)
  },
  

  {
    path: 'accueil',
    loadChildren: () => import('./accueil/accueil.module').then( m => m.AccueilPageModule)
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
    path: 'vote',
    loadChildren: () => import('./vote/vote.module').then( m => m.VotePageModule)
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
    path: 'scanner',
    loadChildren: () => import('./scanner/scanner.module').then( m => m.ScannerPageModule)
  },
  {
    path: 'categorievote',
    loadChildren: () => import('./categorievote/categorievote.module').then( m => m.CategorievotePageModule)
  },
  {
    path: 'classement',
    loadChildren: () => import('./classement/classement.module').then( m => m.ClassementPageModule)
  },  {
    path: 'candidats',
    loadChildren: () => import('./candidats/candidats.module').then( m => m.CandidatsPageModule)
  },



];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
