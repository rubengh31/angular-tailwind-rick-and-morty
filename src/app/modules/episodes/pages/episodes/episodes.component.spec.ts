import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from '@angular/core';
import { EpisodesService } from '../../services/episodes.service';
import { HttpClientModule } from '@angular/common/http';
import {
  episodesListCustom,
  mockEpisodesService,
} from '../../services/mockEpisodesService';
import { of, Subscription } from 'rxjs';
import { EpisodesComponent } from './episodes.component';

describe('EpisodesComponent', () => {
  let episodesComponent: EpisodesComponent;
  let fixture: ComponentFixture<EpisodesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HttpClientModule, RouterTestingModule],
      declarations: [EpisodesComponent],
      providers: [{ provide: EpisodesService, useValue: mockEpisodesService }],
      schemas: [CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EpisodesComponent);
    episodesComponent = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('Should create EpisodesComponent', () => {
    expect(episodesComponent).toBeTruthy();
  });

  it('Should name has "Episodes" as a value', () => {
    expect(episodesComponent.name).toEqual('Episodes');
  });

  it('Should tableCols has as columns "["episode", "name", "air_date", "id"]" as a value', () => {
    expect(episodesComponent.tableCols).toEqual([
      'episode',
      'name',
      'air_date',
      'id',
    ]);
  });

  it('Should call getEpisodes()', () => {
    const getMeListEpisodes = spyOn(mockEpisodesService, 'getEpisodes');
    getMeListEpisodes.and.returnValue(of(episodesListCustom));
    episodesComponent.getEpisodes();
    expect(mockEpisodesService.getEpisodes).toHaveBeenCalled();
    expect(episodesComponent.tableData).toEqual(Object(episodesListCustom));
  });

  it('Should episodesSubscription$ unsubscribe onDestroy()', () => {
    episodesComponent.episodesSubscription$ = new Subscription();
    spyOn(episodesComponent.episodesSubscription$, 'unsubscribe');
    episodesComponent.ngOnDestroy();
    expect(episodesComponent.episodesSubscription$.unsubscribe).toHaveBeenCalledTimes(1);
  });
});
