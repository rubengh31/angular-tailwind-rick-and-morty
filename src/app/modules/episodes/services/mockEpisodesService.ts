import { Observable, of } from 'rxjs';
import { EpisodesListCustom, SingleEpisodeCustom } from '../episodes.interface';

export const episodesListCustom = {
  id: 1,
  name: 'Pilot',
  episode: 'S01E01',
  air_date: 'December 2, 2013 (9 years ago)',
};

export const singleEpisodeCustom = {
  id: 1,
  name: 'Pilot',
  air_date: 'December 2, 2013',
  episode: 'S01E01',
  characters: [],
  url: 'https://rickandmortyapi.com/api/episode/1',
  created: '2017-11-10T12:56:33.798Z',
  image: 'assets/images/episode.png'
};

export const mockEpisodesService: {
  getEpisodes: () => Observable<EpisodesListCustom>;
  getEpisode: (id: number) => Observable<SingleEpisodeCustom>;
} = {
  getEpisodes: () => of(episodesListCustom),
  getEpisode: (id: number) => of(singleEpisodeCustom),
};
