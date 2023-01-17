import { selectLoadingCharacters } from './../../../../state/selectors/characters.selectors';
import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { CharacterResults } from '../../characters.interface';
import { Store } from '@ngrx/store';
import { loadCharacters } from 'src/app/state/actions/characters.actions';

@Component({
  selector: 'characters',
  templateUrl: './characters.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  styleUrls: ['./characters.component.scss'],
})
export class CharactersComponent implements OnInit {
  loading$: Observable<boolean> = new Observable();
  characters$: Observable<CharacterResults[]> = new Observable();

  constructor(private store: Store<any>) {}

  ngOnInit(): void {
    this.loading$ = this.store.select(selectLoadingCharacters);
    this.store.dispatch(loadCharacters());
  }
}
