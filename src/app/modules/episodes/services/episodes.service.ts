import {
  EpisodesList,
  EpisodesListCustom,
  SingleEpisode,
  SingleEpisodeCustom,
} from './../episodes.interface';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, map, mergeMap, zip, of, forkJoin } from 'rxjs';
import { environment } from 'src/environments/environment';
import { TimeAgoPipe } from '../../../shared/pipes/timeAgo.pipe';

@Injectable({
  providedIn: 'root', // with the provider as ‘root’ then such instances become single and shared instances for the one app instances.
}) // This same singleton shared instance will be called everywhere as and when the instance is needed to be used.
export class EpisodesService {
  private API_URL = environment.API_URL;

  constructor(private http: HttpClient, private TimeAgoPipe: TimeAgoPipe) {}

  getEpisodes(): Observable<EpisodesListCustom[]> {
    return this.http.get<EpisodesList>(`${this.API_URL}/episode`).pipe(
      map((data: EpisodesList) =>
        data.results.map((episode: SingleEpisode) => ({
          id: episode.id,
          name: episode.name,
          episode: episode.episode,
          air_date: `${episode.air_date} (${this.TimeAgoPipe.transform(
            episode.air_date
          )})`,
        }))
      )
    );
  }

  getEpisode(id: number): Observable<SingleEpisodeCustom> {
    return this.http.get<SingleEpisode>(`${this.API_URL}/episode/${id}`).pipe(
      mergeMap((data: any) =>
        zip(
          of(data),
          forkJoin(
            data.characters.map((character: string) => this.http.get(character))
          )
        )
      ),
      map(([episode, characters]) => ({
        ...episode,
        characters,
        image: 'assets/images/episode.png',
      }))
    );
  }
}
