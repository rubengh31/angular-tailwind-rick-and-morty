import { ChangeDetectionStrategy, Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'simple-card',
  templateUrl: './simple-card.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  styleUrls: ['./simple-card.component.scss'],
})
export class SimpleCardComponent implements OnInit {
  @Input() data: any;
  @Output() clickOnCharacterFromEpisode: EventEmitter<boolean> = new EventEmitter();
  
  constructor() {}

  ngOnInit(): void {}

  /**
   * A custom TrackByFunction is useful to provide good user experience in cases when items in an iterable rendered using NgForOf have a natural identifier
   * (for example, custom ID or a primary key), and this iterable could be updated with new object instances that still represent the same underlying entity (for example,
   * when data is re-fetched from the server, and the iterable is recreated and re-rendered, but most of the data is still the same).
   */
  trackByFn(item: any): number {
    return item.id;
  }

  navigateToSpecificCharacterOfAnEpisode(character: any){
    this.clickOnCharacterFromEpisode.emit(character);
  }
}
