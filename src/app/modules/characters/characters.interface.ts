import { Info, NameAndUrl } from 'src/app/core/models/generic.interface';

export interface Character {
  info: Info;
  results: CharacterResults[];
}

export interface CharacterResults {
  id: number;
  name: string;
  status: string;
  species: string;
  type: string;
  gender: string;
  origin: NameAndUrl;
  location: NameAndUrl;
  image: string;
  episode: string[];
  url: string;
  created: string;
}