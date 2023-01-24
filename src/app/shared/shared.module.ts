import {
  CUSTOM_ELEMENTS_SCHEMA,
  NgModule,
  NO_ERRORS_SCHEMA,
} from '@angular/core';
import { DetailCardComponent } from './components/cards/detail-card/detail-card.component';
import { SimpleCardComponent } from './components/cards/simple-card/simple-card.component';
import { TableComponent } from './components/table/table.component';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MaterialModule } from './material.module';
import { InputSearchComponent } from './components/input-search/input-search.component';

@NgModule({
  declarations: [
    SimpleCardComponent,
    DetailCardComponent,
    TableComponent,
    InputSearchComponent,
  ],
  imports: [CommonModule, RouterModule, MaterialModule],
  exports: [
    SimpleCardComponent,
    DetailCardComponent,
    TableComponent,
    InputSearchComponent,
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA],
  providers: [],
  bootstrap: [],
})
export class SharedModule {}
