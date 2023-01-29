import { MaterialModule } from './../../shared/material.module';
import {
  CUSTOM_ELEMENTS_SCHEMA,
  NgModule,
  NO_ERRORS_SCHEMA,
} from '@angular/core';
import { SharedModule } from 'src/app/shared/shared.module';
import { CommonModule } from '@angular/common';
import { InfiniteScrollRoutingModule } from './infinite-scroll.routing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { InfiniteScrollComponent } from './infinite-scroll.component';
import { InfiniteScrollModule } from 'ngx-infinite-scroll';

@NgModule({
  declarations: [InfiniteScrollComponent],
  imports: [
    CommonModule,
    SharedModule,
    InfiniteScrollRoutingModule,
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
export class MyInfiniteScrollModule {}
