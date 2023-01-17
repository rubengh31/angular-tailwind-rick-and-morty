import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

@Component({
  selector: 'location',
  templateUrl: './location.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  styleUrls: ['./location.component.scss'],
})
export class LocationComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {
  }
}
