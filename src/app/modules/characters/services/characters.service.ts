import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, forkJoin, mergeMap } from 'rxjs';
import { map } from 'rxjs';
import { CharacterResults } from '../characters.interface';
export interface Cat {
  name: string;
  temperament: string;
  image: any;
  description: string;
}
@Injectable({
  providedIn: 'root',
})
export class CharactersService {
  private API_URL = 'https://rickandmortyapi.com/api';

  constructor(private http: HttpClient) {}

  getCharacters(): Observable<CharacterResults[]> {
    return this.http.get<CharacterResults[]>(`${this.API_URL}/episode`);
    // .pipe(map((data: Character) => data.results));
  }

  getCharacter(id: number): Observable<CharacterResults> {
    return this.http.get<CharacterResults>(`${this.API_URL}/character/${id}`);
  }

  getPokemons(limit?: number, offset?: number): Observable<any> {
    return this.http
      .get<any>(
        `https://pokeapi.co/api/v2/pokemon?limit=${limit}&offset=${offset}`
      )
      .pipe(
        mergeMap((data: any) =>
          forkJoin(
            data.results.map((pokemon: any) =>
              this.http.get(pokemon.url).pipe(
                map((data: any) => ({
                  id: data.id,
                  name: data.name,
                  image: data.sprites.front_default,
                  type: data.types,
                }))
              )
            )
          )
        )
      );
  }

  getCats(page: number): Observable<Cat[]> {
    return this.http.get(
      `https://api.thecatapi.com/v1/breeds?page=${page}&limit=5`
    ) as Observable<Cat[]>;
  }
}
