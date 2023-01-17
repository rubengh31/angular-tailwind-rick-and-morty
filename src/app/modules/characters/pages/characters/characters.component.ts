import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { CharacterResults } from '../../characters.interface';
import { CharactersService } from '../../services/characters.service';

@Component({
  selector: 'characters',
  templateUrl: './characters.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  styleUrls: ['./characters.component.scss'],
})
export class CharactersComponent implements OnInit {
  characters$: Observable<CharacterResults[]>;

  constructor(private charactersService: CharactersService) {}

  ngOnInit(): void {
    this.characters$ = this.charactersService.getCharacters();
    // this.characters$.subscribe(console.log);
  }
}
