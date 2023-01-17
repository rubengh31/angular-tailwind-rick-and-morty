import { Component, OnInit } from '@angular/core';
import { EpisodesService } from '../../services/episodes.service';
import { Subscription } from 'rxjs';
import { EpisodesListCustom } from '../../episodes.interface';

@Component({
  selector: 'episodes',
  templateUrl: './episodes.component.html',
  styleUrls: ['./episodes.component.scss'],
})
export class EpisodesComponent implements OnInit {
  name: string = 'Episodes';
  episodesSubscription$: Subscription;
  tableCols = ['episode', 'name', 'air_date', 'id'];
  tableData: any = [];

  constructor(private episodesService: EpisodesService) {
  }

  ngOnInit(): void {
    this.getEpisodes();
  }

  getEpisodes(): void {
    this.episodesSubscription$ = this.episodesService
      .getEpisodes()
      .subscribe((data: EpisodesListCustom[]) => {
        this.tableData = data;
      });
  }

  ngOnDestroy(): void {
    this.episodesSubscription$.unsubscribe();
  }
}
