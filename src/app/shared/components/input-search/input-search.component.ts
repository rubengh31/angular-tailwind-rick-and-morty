import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl } from '@angular/forms';
import { debounceTime, map, Subscription } from 'rxjs';

@Component({
  selector: 'input-search',
  templateUrl: './input-search.component.html',
  styleUrls: ['./input-search.component.scss'],
})
export class InputSearchComponent implements OnInit {
  public searchForm = new FormControl();
  @Input() name:string;
  @Output() searchFormChange = new EventEmitter<any>();

  constructor() {}

  ngOnInit() {
    this.searchForm?.valueChanges
      .pipe(
        map((res) => res.trim().toLowerCase()),
        debounceTime(1000)
      )
      .subscribe(
        (data: any) => this.searchFormChange.emit(data.trim().toLowerCase())
      );
  }
}
