import { Component } from '@angular/core';
import { RxjsService } from './rxjs.service';
import { Observable, delay, map } from 'rxjs';

@Component({
  selector: 'app-rxjs',
  templateUrl: './rxjs.component.html',
  styleUrls: ['./rxjs.component.scss'],
})
export class RxjsComponent {
  limit: number = 151;
  offset: number = 0;
  pokemons$: Observable<any>;
  public searchPokemon = '';
  withSearchFilter: boolean = false;
  textSearched: string = '';

  constructor(private rxjsService: RxjsService) {}

  ngOnInit(): void {
    this.pokemons$ = this.rxjsService.getPokemons(this.limit, this.offset);
  }

  sortBy(event: any) {
    const target = event.target as HTMLTextAreaElement;
    if (target.value === 'lowestOrderFirst') {
      this.lowestOrderFirst();
    } else if (target.value === 'AtoZ') {
      this.AtoZ();
    } else if (target.value === 'ZtoA') {
      this.ZtoA();
    } else if (target.value === 'highestOrderFirst') {
      this.highestOrderFirst();
    }
  }

  lowestOrderFirst() {
    this.pokemons$ = this.rxjsService
      .getPokemons(this.limit, this.offset)
      .pipe(map((data) => data.sort((a: any, b: any) => a.id - b.id)));
  }

  highestOrderFirst() {
    this.pokemons$ = this.rxjsService
      .getPokemons(this.limit, this.offset)
      .pipe(map((data) => data.sort((a: any, b: any) => b.id - a.id)));
  }

  AtoZ() {
    this.pokemons$ = this.rxjsService
      .getPokemons(this.limit, this.offset)
      .pipe(
        map((data) => data.sort((a: any, b: any) => (a.name < b.name ? -1 : 1)))
      );
  }

  ZtoA() {
    this.pokemons$ = this.rxjsService
      .getPokemons(this.limit, this.offset)
      .pipe(
        map((data) => data.sort((a: any, b: any) => (a.name < b.name ? 1 : -1)))
      );
  }
}
