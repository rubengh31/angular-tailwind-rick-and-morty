import { Info } from './../../core/models/generic.interface';

export interface Locations {
  info: Info,
  results: LocationsResults[]
}

export interface LocationsResults {
    id: number,
    name: string,
    type: string,
    dimension: string,
    residents: [],
    url: string,
    created: string
}