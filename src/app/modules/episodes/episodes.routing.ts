import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EpisodeComponent } from './pages/episode/episode.component';
import { EpisodesComponent } from './pages/episodes/episodes.component';

const routes: Routes = [
  { path: '', component: EpisodesComponent },
  { path: ':id', component: EpisodeComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EpisodesRoutingModule { }