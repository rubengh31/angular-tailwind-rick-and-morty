import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CharacterResults } from '../../characters.interface';
import { CharactersService } from '../../services/characters.service';
import { Observable, switchMap } from 'rxjs';

@Component({
  selector: 'profile-character',
  templateUrl: './profile-character.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  styleUrls: ['./profile-character.component.scss'],
})
export class ProfileCharacterComponent implements OnInit {
  character$: Observable<CharacterResults>;

  constructor(
    private charactersService: CharactersService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.getCharacter();
  }

  getCharacter() {
    this.character$ = this.route.paramMap.pipe(
      switchMap((params) => {
        let id: number = Number(params.get('id'));
        return this.charactersService.getCharacter(id);
      })
    );
    // this.character$.subscribe(console.log);
  }
}
