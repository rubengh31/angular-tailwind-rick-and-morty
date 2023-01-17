import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { map, tap } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { HttpHeaders, HttpClient } from '@angular/common/http';

@Component({
  selector: 'detail-card',
  templateUrl: './detail-card.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  styleUrls: ['./detail-card.component.scss'],
})
export class DetailCardComponent {
  @Input() data: any;
  @Input() name: string;

  constructor(private http: HttpClient) {}
}
