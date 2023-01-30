import {
  CUSTOM_ELEMENTS_SCHEMA,
  NgModule,
  NO_ERRORS_SCHEMA,
} from '@angular/core';

import { CommonModule } from '@angular/common';
import { FlexBoxComponent } from './flex-box.component';
import { FlexBoxRoutingModule } from './flex-box.routing';

@NgModule({
  declarations: [FlexBoxComponent],
  imports: [CommonModule, FlexBoxRoutingModule],
  exports: [],
  providers: [],
  schemas: [CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA],
  bootstrap: [],
})
export class FlexBoxModule {}
