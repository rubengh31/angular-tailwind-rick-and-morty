import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProfileCharacterComponent } from './pages/character/profile-character.component';
import { CharactersComponent } from './pages/characters/characters.component';

const routes: Routes = [
  { path: '', component: CharactersComponent },
  { path: ':id', component: ProfileCharacterComponent },
  { path: 'episode/:id', component: CharactersComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CharactersRoutingModule { }