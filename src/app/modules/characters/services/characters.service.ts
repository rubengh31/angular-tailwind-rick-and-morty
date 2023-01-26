import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../../../environments/environment';
import { map } from 'rxjs';
import { Character, CharacterResults } from '../characters.interface';

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
}
