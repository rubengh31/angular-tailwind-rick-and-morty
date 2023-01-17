import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { CharactersComponent } from './characters.component';
import { CharactersService } from '../../services/characters.service';
import {
  characters,
  mockCharactersService,
} from '../../services/mockCharactersService';
import { of } from 'rxjs';

describe('CharactersComponent', () => {
  let charactersComponent: CharactersComponent;
  let fixture: ComponentFixture<CharactersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HttpClientModule, RouterTestingModule],
      declarations: [CharactersComponent],
      providers: [
        { provide: CharactersService, useValue: mockCharactersService },
      ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CharactersComponent);
    charactersComponent = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('Should create CharactersComponent', () => {
    expect(charactersComponent).toBeTruthy();
  });

  it('Should call getCharacters()', () => {
    const getMeCharacters = spyOn(mockCharactersService, 'getCharacters');
    getMeCharacters.and.returnValue(of(characters));
    charactersComponent.ngOnInit();
    expect(mockCharactersService.getCharacters).toHaveBeenCalled();
  });
});
