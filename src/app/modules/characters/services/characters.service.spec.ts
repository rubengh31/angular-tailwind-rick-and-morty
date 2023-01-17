import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { fakeAsync } from '@angular/core/testing';
import { of } from 'rxjs';
import { environment } from 'src/environments/environment';
import { CharactersService } from './characters.service';
import { characters, charactersArray } from './mockCharactersService';

describe('Characters Service', () => {
  let httpClientSpy: jasmine.SpyObj<HttpClient>;
  let charactersService: CharactersService;

  beforeEach(() => {
    httpClientSpy = jasmine.createSpyObj('HttpClient', ['get']);
    charactersService = new CharactersService(httpClientSpy);
  });

  it('[Characters.service.ts] Should API_URL get environment.API_URL value', () => {
    const url = charactersService['API_URL'];
    expect(url).toBe(environment.API_URL);
  });

  it('[Characters.service.ts] Should return expected getCharacters()', (done: DoneFn) => {
    httpClientSpy.get.and.returnValue(of(charactersArray));
    charactersService.getCharacters().subscribe({
      next: (charactersResponse) => {
        setTimeout(() => {
          expect(charactersResponse).withContext('expected characters').toEqual(Object(charactersArray));
          console.log('charactersResponse',charactersResponse);
        }, 2000);
        done();
      },
      error: done.fail,
    });
    expect(httpClientSpy.get).toHaveBeenCalledTimes(1);
  });

  it('[Characters.service.ts] Should return expected getCharacter()', (done: DoneFn) => {
    httpClientSpy.get.and.returnValue(of(characters));

    charactersService.getCharacter(1).subscribe({
      next: (characterResponse) => {
        expect(characterResponse)
          .withContext('expected character')
          .toEqual(characters);
        done();
      },
      error: done.fail,
    });
    expect(charactersService.getCharacter).toBeDefined()

    expect(httpClientSpy.get.calls.count()).withContext('one call').toBe(1);
  });
});