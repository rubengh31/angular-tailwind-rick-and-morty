import { selectCharactersCards } from './../../../../state/selectors/characters.selectors';
import { Observable } from 'rxjs';
import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  OnInit,
  Output,
} from '@angular/core';
import { AppState } from 'src/app/state/app.state';
import { Store } from '@ngrx/store';

@Component({
  selector: 'simple-card',
  templateUrl: './simple-card.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  styleUrls: ['./simple-card.component.scss'],
})
export class SimpleCardComponent implements OnInit {
  @Output() clickOnCharacterFromEpisode: EventEmitter<boolean> =
    new EventEmitter();
  loaded$: Observable<any> = new Observable();

  constructor(private store: Store<AppState>) {}

  ngOnInit(): void {
    this.loaded$ = this.store.select(selectCharactersCards);
  }

  trackByFn(item: any): number {
    return item.id;
  }

  navigateToSpecificCharacterOfAnEpisode(character: any) {
    this.clickOnCharacterFromEpisode.emit(character);
  }
}
