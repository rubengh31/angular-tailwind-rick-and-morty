import {
  CUSTOM_ELEMENTS_SCHEMA,
  NgModule,
  NO_ERRORS_SCHEMA,
} from '@angular/core';
import { CrudComponent } from './crud.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { CommonModule } from '@angular/common';
import { CrudRoutingModule } from './crud.routing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgxPaginationModule } from 'ngx-pagination';

@NgModule({
  declarations: [CrudComponent],
  imports: [
    CommonModule,
    SharedModule,
    CrudRoutingModule,
    FormsModule,
    CommonModule,
    ReactiveFormsModule,
    NgxPaginationModule,
  ],
  exports: [],
  providers: [],
  schemas: [CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA],
  bootstrap: [],
})
export class CrudModule {}
