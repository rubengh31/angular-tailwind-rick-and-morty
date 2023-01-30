import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  OnDestroy,
  OnInit,
} from '@angular/core';
import { Subscription } from 'rxjs';
import { LocationsService } from '../../services/locations.service';

@Component({
  selector: 'locations',
  templateUrl: './locations.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  styleUrls: ['./locations.component.scss'],
})
export class LocationsComponent implements OnInit, OnDestroy {
  name: string = 'Locations';
  isLoaded: boolean = false;
  locationsSubscription$: Subscription;
  tableCols = ['name', 'type', 'dimension', 'created', 'id'];
  tableData: any = [];

  constructor(
    private locationsService: LocationsService,
    private cdr: ChangeDetectorRef
  ) {}

  ngOnInit(): void {
    this.getLocations();
  }

  getLocations(): void {
    this.locationsSubscription$ = this.locationsService
      .getLocations()
      .subscribe((data: any) => {
        this.tableData = data;
        this.isLoaded = true;
        this.cdr.detectChanges();
      });
  }

  ngOnDestroy(): void {
    this.locationsSubscription$.unsubscribe();
  }
}
