import { ProfileCharacterComponent } from 'src/app/modules/characters/pages/character/profile-character.component';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { CharactersService } from '../../services/characters.service';
import {
  characters,
  mockCharactersService,
} from '../../services/mockCharactersService';
import { of } from 'rxjs';

describe('CharactersComponent', () => {
  let profileCharacterComponent: ProfileCharacterComponent;
  let fixture: ComponentFixture<ProfileCharacterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HttpClientModule, RouterTestingModule],
      declarations: [ProfileCharacterComponent],
      providers: [
        { provide: CharactersService, useValue: mockCharactersService },
      ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfileCharacterComponent);
    profileCharacterComponent = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('Should create CharactersComponent', () => {
    expect(profileCharacterComponent).toBeTruthy();
  });

  it('Should call getCharacter()', () => {
    spyOn(mockCharactersService, 'getCharacter').and.returnValue(
      of(characters)
    );
    spyOn(profileCharacterComponent, 'getCharacter').and.callThrough();
    profileCharacterComponent.getCharacter();
    expect(profileCharacterComponent.getCharacter).toHaveBeenCalled();
  });
});
