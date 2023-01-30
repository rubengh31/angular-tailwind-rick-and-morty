import { MaterialModule } from './../../shared/material.module';
import {
  CUSTOM_ELEMENTS_SCHEMA,
  NgModule,
  NO_ERRORS_SCHEMA,
} from '@angular/core';
import { SharedModule } from 'src/app/shared/shared.module';
import { CommonModule } from '@angular/common';
import { RxjsRoutingModule } from './rxjs.routing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RxjsComponent } from './rxjs.component';
import { InfiniteScrollModule } from 'ngx-infinite-scroll';
import { FilterPokemonPipe } from './filterPokemon.pipe';

@NgModule({
  declarations: [RxjsComponent, FilterPokemonPipe],
  imports: [
    CommonModule,
    SharedModule,
    RxjsRoutingModule,
    FormsModule,
    CommonModule,
    ReactiveFormsModule,
    InfiniteScrollModule,
    MaterialModule,
  ],
  exports: [],
  providers: [],
  schemas: [CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA],
  bootstrap: [],
})
export class RxjsModule {}
