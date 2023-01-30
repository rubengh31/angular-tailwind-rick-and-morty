import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from '@angular/core';
import { EpisodeComponent } from './episode.component';
import { EpisodesService } from '../../services/episodes.service';
import { TimeAgoPipe } from './../../../../shared/pipes/timeAgo.pipe';
import { HttpClientModule } from '@angular/common/http';
import {
  mockEpisodesService,
  singleEpisodeCustom,
} from '../../services/mockEpisodesService';
import { of } from 'rxjs';

describe('EpisodeComponent', () => {
  let episodeComponent: EpisodeComponent;
  let fixture: ComponentFixture<EpisodeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HttpClientModule, RouterTestingModule],
      declarations: [EpisodeComponent],
      providers: [
        v,
        { provide: EpisodesService, useValue: mockEpisodesService },
      ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EpisodeComponent);
    episodeComponent = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('Should create EpisodeComponent', () => {
    expect(episodeComponent).toBeTruthy();
  });

  it('Should call getEpisode()', () => {
    spyOn(mockEpisodesService, 'getEpisode').and.returnValue(
      of(singleEpisodeCustom)
    );
    spyOn(episodeComponent, 'getEpisode').and.callThrough();
    episodeComponent.getEpisode();
    expect(episodeComponent.getEpisode).toHaveBeenCalled();
  });
});
