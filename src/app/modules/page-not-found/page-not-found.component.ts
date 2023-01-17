import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'page-not-found',
  templateUrl: './page-not-found.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  styleUrls: ['./page-not-found.component.scss'],
})
export class PageNotFoundComponent {
  constructor() {}
}
