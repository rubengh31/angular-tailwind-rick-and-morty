import { Component } from '@angular/core';
import { InfiniteScrollDataSource } from 'src/app/shared/utilities/infinite-scroll-data-source';

@Component({
  selector: 'app-infinite-scroll',
  templateUrl: './infinite-scroll.component.html',
  styleUrls: ['./infinite-scroll.component.scss'],
})
export class InfiniteScrollComponent {
  dataSource: InfiniteScrollDataSource;

  constructor() {
    this.dataSource = new InfiniteScrollDataSource();
  }
}
