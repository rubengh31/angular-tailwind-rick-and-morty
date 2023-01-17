import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { TimeAgoPipe } from './../../../shared/pipes/timeAgo.pipe';
import { EpisodesService } from './episodes.service';

let httpClientSpy: jasmine.SpyObj<HttpClient>;
let timeAgoPipeSpy: jasmine.SpyObj<TimeAgoPipe>;
let episodesService: EpisodesService;

beforeEach(() => {
  httpClientSpy = jasmine.createSpyObj('HttpClient', ['get']);
  timeAgoPipeSpy = jasmine.createSpyObj('TimeAgoPipe', ['get']);

  episodesService = new EpisodesService(httpClientSpy, timeAgoPipeSpy);
});

it('[Episodes.service.ts] Should API_URL get environment.API_URL value', () => {
  const url = episodesService['API_URL'];
  expect(url).toBe(environment.API_URL);
});

//  it('[Episodes.service.ts] Should return expected getEpisodes()', (done: DoneFn) => {
//    httpClientSpy.get.and.returnValue(of(episodesListCustom));

//    episodesService.getEpisodes().subscribe({
//      next: (episodesResponse) => {
//        expect(episodesResponse)
//          .withContext('expected episodes')
//          .toEqual(episodesResponse);
//        done();
//      },
//      error: done.fail,
//    });
//    expect(httpClientSpy.get.calls.count()).withContext('one call').toBe(1);
//  });

// it('[Episodes.service.ts] Should return expected getEpisode()', (done: DoneFn) => {
//   httpClientSpy.get.and.returnValue(of(singleEpisodeCustom));

//   episodesService.getEpisode(1).subscribe({
//     next: (episodeResponse) => {
//       expect(episodeResponse)
//         .withContext('expected episode')
//         .toEqual(episodeResponse);
//       done();
//     },
//     error: done.fail,
//   });
//   expect(httpClientSpy.get.calls.count()).withContext('one call').toBe(1);
// });
