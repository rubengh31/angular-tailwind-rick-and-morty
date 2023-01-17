import { createSelector } from '@ngrx/store';
import { AppState } from '../app.state';
import { CharactersState } from 'src/app/modules/characters/services/characters.state';

export const selectCharactersFeature = (state: AppState) => state.characters;

export const selectCharactersCards = createSelector(
  selectCharactersFeature,
  (state: CharactersState) => state.characters
);

export const selectLoadingCharacters = createSelector(
  selectCharactersFeature,
  (state: CharactersState) => state.loading
);
