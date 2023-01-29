import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { RxjsService } from './rxjs.service';
import {
  Observable,
  debounceTime,
  distinctUntilChanged,
  filter,
  first,
  map,
  tap,
} from 'rxjs';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-rxjs',
  templateUrl: './rxjs.component.html',
  styleUrls: ['./rxjs.component.scss'],
})
export class RxjsComponent {
  limit: number = 151;
  offset: number = 0;
  pokemons$: Observable<any>;
  public searchPokemon = new FormControl();
  withSearchFilter: boolean = false;
  textSearched: string = '';

  constructor(private rxjsService: RxjsService) {}

  ngOnInit(): void {
    this.lowestOrderFirst();

    this.searchPokemon?.valueChanges
      .pipe(
        filter(Boolean),
        map((res) => res.trim().toLowerCase()),
        debounceTime(1000),
        distinctUntilChanged()
      )
      .subscribe((textSearched: any) => {
        this.textSearched = textSearched;
        this.pokemons$ = this.rxjsService
          .getPokemons(this.limit, this.offset)
          .pipe(
            map((data) =>
              data.filter((a: any) => a.name.includes(textSearched))
            )
          );
      });
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

  //  if (textSearched.length > 0) {
  //     this.withSearchFilter = true;
  //   } else {
  //     this.withSearchFilter = false;

  //    }

  lowestOrderFirst() {
    this.pokemons$ = this.rxjsService.getPokemons(this.limit, this.offset);
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
