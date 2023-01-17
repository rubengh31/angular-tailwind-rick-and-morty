import { ActionReducerMap } from '@ngrx/store';
import { CharactersState } from '../modules/characters/services/characters.state';
import { charactersReducer } from './reducers/characters.reducers';

export interface AppState {
  characters: CharactersState;
}

export const ROOT_REDUCERS: ActionReducerMap<AppState> = {
  characters: charactersReducer,
};
