import { CUSTOM_ELEMENTS_SCHEMA, NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { EpisodeComponent } from './pages/episode/episode.component';
import { EpisodesComponent } from './pages/episodes/episodes.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { CommonModule } from '@angular/common';
import { EpisodesRoutingModule } from './episodes.routing';

@NgModule({
  declarations: [
    EpisodesComponent,
    EpisodeComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    EpisodesRoutingModule,
  ],
  exports: [
  ],
  providers: [],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA,  NO_ERRORS_SCHEMA ],
  bootstrap: []
})
export class EpisodesModule { }