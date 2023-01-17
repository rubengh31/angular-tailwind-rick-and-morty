import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { EMPTY } from 'rxjs';
import { map, mergeMap, catchError, tap } from 'rxjs/operators';
import {
  Character,
  CharacterResults,
} from 'src/app/modules/characters/characters.interface';
import { CharactersService } from 'src/app/modules/characters/services/characters.service';

@Injectable()
export class CharactersEffects {
  constructor(
    private actions$: Actions,
    private charactersService: CharactersService
  ) {}
  loadCharacters$ = createEffect(() =>
    this.actions$.pipe(
      ofType('[Characters] Load Characters cards'), //name from actions
      mergeMap(() =>
        this.charactersService.getCharacters().pipe(
          map((characters) => ({
            type: '[Characters] Characters cards loaded success',
            characters,
          })),
          tap((characters) => console.log(characters)),
          catchError(() => EMPTY)
        )
      )
    )
  );
}
