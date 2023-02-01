import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {
  Observable,
  combineLatest,
  forkJoin,
  map,
  mergeMap,
  switchMap,
  zip,
} from 'rxjs';
import {
  CustomPokemon,
  Pokemon,
  PokemonResult,
  Pokemons,
  Type,
} from './pokemon.interface';

@Injectable({
  providedIn: 'root',
})
export class RxjsService {
  imagesUrl: string =
    'https://assets.pokemon.com/assets/cms2/img/pokedex/detail/';

  constructor(private http: HttpClient) {}

  getPokemons(limit: number, offset: number): Observable<CustomPokemon[]> {
    const queryParams = { limit, offset };

    return this.http
      .get<Pokemons>(`https://pokeapi.co/api/v2/pokemon?`, {
        params: queryParams,
      })
      .pipe(
        switchMap((pokemons: Pokemons) =>
          zip(
            pokemons.results.map((pokemon: PokemonResult) =>
              this.http.get<Pokemon>(pokemon.url).pipe(
                map((pokemon: Pokemon) => ({
                  id: pokemon.id,
                  name: pokemon.name,
                  image:
                    pokemon.id < 10
                      ? `${this.imagesUrl}00${pokemon.id}.png`
                      : pokemon.id > 9 && pokemon.id < 100
                      ? `${this.imagesUrl}0${pokemon.id}.png`
                      : `${this.imagesUrl}${pokemon.id}.png`,
                  abilities: pokemon.types.map((el: Type) => el.type.name),
                }))
              )
            )
          )
        )
      );
  }

  // getPokemons(limit: number, offset: number): Observable<CustomPokemon[]> {
  //   let queryParams = { limit, offset };

  //   return this.http
  //     .get<Pokemons>(`https://pokeapi.co/api/v2/pokemon?`, {
  //       params: queryParams,
  //     })
  //     .pipe(
  //       /**
  //        Ambos permiten controlar un observable a partir de los elementos de otro, de este modo podemos generar un tercer observable como resultado (o devolver el segundo observable modificado).
  //        */
  //       // mergeMap((data: any) =>
  //       //MergeMap inicia el segundo observable al ejecutarse el primero
  //       switchMap((pokemons: Pokemons) =>
  //         // A diferencia de MergeMap, si el primer observable retorna un nuevo valor SwitchMap cancela la suscripción actual, no existe la posiblidad de que haya ejecuciones en paralelo como con MergeMap.
  //         zip(
  //           // combineLatest(
  //           // forkJoin(
  //           //se puede usar zip o combineLatest : espera a que se completen todos los observables y luego solo emite el último valor de cada observable, si no es http mejor forkJoin
  //           pokemons.results.map((pokemon: PokemonResult) =>
  //             this.http.get<Pokemon>(pokemon.url).pipe(
  //               map((pokemon: Pokemon) => ({
  //                 id: pokemon.id,
  //                 name: pokemon.name,
  //                 image:
  //                   pokemon.id < 10
  //                     ? `${this.imagesUrl}00${pokemon.id}.png`
  //                     : pokemon.id > 9 && pokemon.id < 100
  //                     ? `${this.imagesUrl}0${pokemon.id}.png`
  //                     : `${this.imagesUrl}${pokemon.id}.png`,
  //                 abilities: pokemon.types.map((el: Type) => el.type.name),
  //               }))
  //             )
  //           )
  //         )
  //       )
  //     );
  // }
}
