import { tap } from 'rxjs/operators';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, Observable } from 'rxjs';
import { Locations } from '../locations.interface';
import { TimeAgoPipe } from 'src/app/shared/pipes/timeAgo.pipe';

@Injectable({
  providedIn: 'root',
})
export class LocationsService {
  private API_URL = 'https://rickandmortyapi.com/api';

  constructor(private http: HttpClient, private TimeAgoPipe: TimeAgoPipe) {}

  getLocations(): Observable<Locations[]> {
    return this.http.get<Locations[]>(`${this.API_URL}/location`).pipe(
      map((data: any) =>
        data.results.map((location: any) => ({
          id: location.id,
          name: location.name,
          type: location.type,
          dimension: location.dimension,
          created: this.TimeAgoPipe.transform(location.created),
        }))
      )
    );
  }
}
