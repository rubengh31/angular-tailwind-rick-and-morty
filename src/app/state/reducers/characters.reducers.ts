import { CharactersState } from 'src/app/modules/characters/services/characters.state';
import {
  loadCharacters,
  loadedCharacters,
} from '../actions/characters.actions';
import { createReducer, on } from '@ngrx/store';

export const initialState: CharactersState = { loading: false, characters: [] };

export const charactersReducer = createReducer(
  initialState,
  on(loadCharacters, (state) => {
    return { ...state, loading: true };
  }),
  on(loadedCharacters, (state: any, second) => {
    return { ...state, loading: false, characters: second.characters };
  })
);
