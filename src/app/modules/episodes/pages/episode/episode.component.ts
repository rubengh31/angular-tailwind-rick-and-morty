import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Observable, switchMap } from 'rxjs';
import { SingleEpisodeCustom } from '../../episodes.interface';
import { EpisodesService } from '../../services/episodes.service';

@Component({
  selector: 'app-episode',
  templateUrl: './episode.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  styleUrls: ['./episode.component.scss'],
})
export class EpisodeComponent implements OnInit {
  episode$: Observable<SingleEpisodeCustom>;

  constructor(
    private episodesService: EpisodesService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.getEpisode();
  }

  getEpisode(): void {
    this.episode$ = this.route.paramMap.pipe(
      switchMap((params: ParamMap) => {
        let id: number = Number(params.get('id'));
        return this.episodesService.getEpisode(id);
      })
    );

    // this.episode$.subscribe(console.log)
  }
}
