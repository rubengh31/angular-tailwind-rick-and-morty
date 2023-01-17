import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Locations } from '../locations.interface';

@Injectable({
  providedIn: 'root',
})

export class LocationsService {
  private API_URL = environment.API_URL;

  constructor(private http: HttpClient) {}

  getLocations(): Observable<Locations[]> {
    return this.http.get<Locations[]>(`${this.API_URL}/location`).pipe(
      map((res:any)=> res.results)
    );
  }
}
