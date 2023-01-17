import { CommonModule } from "@angular/common";
import { CUSTOM_ELEMENTS_SCHEMA, NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { SharedModule } from "src/app/shared/shared.module";
import { LocationsComponent } from "./pages/locations/locations.component";
import { LocationsRoutingModule } from './locations.routing';

@NgModule({
  declarations: [
    LocationsComponent,
  ],
  imports: [
    CommonModule,
    SharedModule,
    LocationsRoutingModule,
  ],
  exports: [
  ],
  providers: [],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA,  NO_ERRORS_SCHEMA ],
  bootstrap: []
})
export class LocationsModule { }