import {
  Component,
  ElementRef,
  EventEmitter,
  Input,
  OnInit,
  Output,
  ViewChild,
} from '@angular/core';
import { FormControl } from '@angular/forms';
import {
  debounceTime,
  distinctUntilChanged,
  filter,
  fromEvent,
  map,
  Subscription,
  tap,
} from 'rxjs';

@Component({
  selector: 'input-search',
  templateUrl: './input-search.component.html',
  styleUrls: ['./input-search.component.scss'],
})
export class InputSearchComponent implements OnInit {
  public searchForm = new FormControl();
  @Input() name: string;
  @Output() searchFormChange = new EventEmitter<any>();
  @ViewChild('input') input: ElementRef;

  constructor() {}

  ngOnInit() {
    this.searchForm?.valueChanges
      .pipe(
        filter(Boolean),
        map((res) => res.trim().toLowerCase()),
        debounceTime(1000),
        distinctUntilChanged(),
        tap(() => {
          console.log(this.input.nativeElement.value);
        })
      )
      .subscribe((data: any) =>
        this.searchFormChange.emit(data.trim().toLowerCase())
      );
  }
}
