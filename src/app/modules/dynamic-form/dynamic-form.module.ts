import {
  CUSTOM_ELEMENTS_SCHEMA,
  NgModule,
  NO_ERRORS_SCHEMA,
} from '@angular/core';
import { SharedModule } from 'src/app/shared/shared.module';
import { CommonModule } from '@angular/common';
import { DynamicFormRoutingModule } from './dynamic-form.routing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DynamicFormComponent } from './dynamic-form.component';

@NgModule({
  declarations: [DynamicFormComponent],
  imports: [
    CommonModule,
    SharedModule,
    DynamicFormRoutingModule,
    FormsModule,
    CommonModule,
    ReactiveFormsModule,
  ],
  exports: [],
  providers: [],
  schemas: [CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA],
  bootstrap: [],
})
export class DynamicFormModule {}
