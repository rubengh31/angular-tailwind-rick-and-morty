import { CharacterResults } from '../characters/characters.interface';
import { Info } from './../../core/models/generic.interface';

export interface EpisodesList {
  info: Info;
  results: SingleEpisode[];
}

export interface EpisodesListCustom {
  id: number;
  name: string;
  episode: string;
  air_date: string;
}

export interface SingleEpisode {
  id: number;
  name: string;
  air_date: string;
  episode: string;
  characters: CharacterResults[];
  url: string;
  created: string;
}

export interface SingleEpisodeCustom {
  id: number;
  name: string;
  air_date: string;
  episode: string;
  characters: string[];
  url: string;
  created: string;
  image: string;
}
