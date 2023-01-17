import { createAction, props } from '@ngrx/store';
import { CharacterResults } from 'src/app/modules/characters/characters.interface';

export const loadCharacters = createAction(
  '[Characters] Load Characters cards'
);
export const loadedCharacters = createAction(
  '[Characters] Characters cards loaded success',
  props<{ characters: CharacterResults[] }>()
);
