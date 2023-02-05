import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RxjsService } from './rxjs.service';
import { Observable, catchError, map, throwError } from 'rxjs';
import { CustomPokemon } from './pokemon.interface';

@Component({
  selector: 'app-rxjs',
  templateUrl: './rxjs.component.html',
  styleUrls: ['./rxjs.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RxjsComponent {
  pokemons$: Observable<any>;
  public searchPokemon!: string;
  option: any = 'lowestOrderFirst';
  limit: number = 151;
  offset: number = 0;
  errorObject: any;

  constructor(private rxjsService: RxjsService) {}

  ngOnInit(): void {
    this.pokemons$ = this.rxjsService.getPokemons(this.limit, this.offset).pipe(
      catchError((err) => {
        this.errorObject = err;
        return throwError(() => new Error(err));
      })
    );
  }

  sortBy(event: any): void {
    this.option = event.target.value as HTMLTextAreaElement;
    this.pokemons$ = this.rxjsService.getPokemons(this.limit, this.offset).pipe(
      map((data: CustomPokemon[]) => {
        if (this.option === 'lowestOrderFirst') {
          return data.sort((a: any, b: any) => a.id - b.id);
        } else if (this.option === 'highestOrderFirst') {
          return data.sort((a: any, b: any) => b.id - a.id);
        } else if (this.option === 'AtoZ') {
          return data.sort((a: any, b: any) => (a.name < b.name ? -1 : 1));
        } else if (this.option === 'ZtoA') {
          return data.sort((a: any, b: any) => (a.name < b.name ? 1 : -1));
        }
        return data;
      }),
      catchError((err) => {
        this.errorObject = err;
        return throwError(() => new Error(err));
      })
    );
  }
}
