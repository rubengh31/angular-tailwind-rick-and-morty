import { AuthGuard } from './../../core/guards/auth.guard';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProfileCharacterComponent } from './pages/character/profile-character.component';
import { CharactersComponent } from './pages/characters/characters.component';

const routes: Routes = [
  { path: '', component: CharactersComponent, canActivate: [AuthGuard] },
  {
    path: ':id',
    component: ProfileCharacterComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'episode/:id',
    component: CharactersComponent,
    canActivate: [AuthGuard],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CharactersRoutingModule {}
