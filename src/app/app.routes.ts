import { Routes } from '@angular/router';

export const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  {
    path: 'home',
    loadComponent: () => import('./features/home/home').then(m => m.Home)
  },
  {
    path: 'characters',
    loadComponent: () => import('./features/characters/characters').then(m => m.Characters)
  },
  {
    path: 'characters/new',
    loadComponent: () => import('./features/character-form/character-form').then(m => m.CharacterForm)
  },
  {
    path: 'characters/:id',
    loadComponent: () => import('./features/character-detail/character-detail').then(m => m.CharacterDetail)
  },
  { path: '**', redirectTo: 'home' }
];