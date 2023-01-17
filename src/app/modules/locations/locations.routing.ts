import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LocationComponent } from './pages/location/location.component';
import { LocationsComponent } from './pages/locations/locations.component';

const routes: Routes = [
  { path: '', component: LocationsComponent },
  { path: ':id', component: LocationComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LocationsRoutingModule { }