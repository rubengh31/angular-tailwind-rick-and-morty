import {
  CUSTOM_ELEMENTS_SCHEMA,
  NgModule,
  NO_ERRORS_SCHEMA,
} from '@angular/core';
import { SharedModule } from 'src/app/shared/shared.module';
import { CommonModule } from '@angular/common';
import { RxjsOperatorsRoutingModule } from './rxjs-operators.routing';
import { RxjsOperatorsComponent } from './rxjs-operators.component';

@NgModule({
  declarations: [RxjsOperatorsComponent],
  imports: [CommonModule, SharedModule, RxjsOperatorsRoutingModule],
  exports: [],
  providers: [],
  schemas: [CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA],
  bootstrap: [],
})
export class RxjsOperatorsModule {}
