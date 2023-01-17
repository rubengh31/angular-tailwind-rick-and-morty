import { CharacterResults } from '../characters.interface';

export interface CharactersState {
  loading: boolean;
  characters: ReadonlyArray<CharacterResults[]>;
}
