import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, forkJoin, map, mergeMap } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class RxjsService {
  constructor(private http: HttpClient) {}
  getPokemons(limit: number, offset: number): Observable<any> {
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
                  image:
                    data.id < 10
                      ? `https://assets.pokemon.com/assets/cms2/img/pokedex/detail/00${data.id}.png`
                      : data.id > 9 && data.id < 100
                      ? `https://assets.pokemon.com/assets/cms2/img/pokedex/detail/0${data.id}.png`
                      : `https://assets.pokemon.com/assets/cms2/img/pokedex/detail/${data.id}.png`,
                  abilities: data.types.map((el: any) => {
                    return {
                      type: el.type.name,
                    };
                  }),
                }))
              )
            )
          )
        )
      );
  }
}
