import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageNotFoundComponent } from './modules/page-not-found/page-not-found.component';

const routes: Routes = [
  {
    path: 'characters',
    loadChildren: () =>
      import('./modules/characters/characters.module').then(
        (m) => m.CharactersModule
      ),
  },
  {
    path: 'episodes',
    loadChildren: () =>
      import('./modules/episodes/episodes.module').then(
        (m) => m.EpisodesModule
      ),
  },
  {
    path: 'locations',
    loadChildren: () =>
      import('./modules/locations/locations.module').then(
        (m) => m.LocationsModule
      ),
  },
  {
    path: 'crud',
    loadChildren: () =>
      import('./modules/crud/crud.module').then((m) => m.CrudModule),
  },
  {
    path: 'dynamic-form',
    loadChildren: () =>
      import('./modules/dynamic-form/dynamic-form.module').then(
        (m) => m.DynamicFormModule
      ),
  },
  {
    path: 'infinite-scroll',
    loadChildren: () =>
      import('./modules/infinite-scroll/infinite-scroll.module').then(
        (m) => m.MyInfiniteScrollModule
      ),
  },
  {
    path: 'rxjs',
    loadChildren: () =>
      import('./modules/rxjs/rxjs.module').then((m) => m.RxjsModule),
  },
  {
    path: 'flex-box',
    loadChildren: () =>
      import('./modules/flex-box/flex-box.module').then((m) => m.FlexBoxModule),
  },
  {
    path: 'rxjs-operators',
    loadChildren: () =>
      import('./modules/rxjs-operators/rxjs-operators.module').then(
        (m) => m.RxjsOperatorsModule
      ),
  },
  { path: '', redirectTo: '', pathMatch: 'full' },
  { path: '**', pathMatch: 'full', component: PageNotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
