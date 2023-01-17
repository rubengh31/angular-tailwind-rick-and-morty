import { TestBed } from '@angular/core/testing';
import { SimpleCardComponent } from './simple-card.component';

describe('SimpleCardComponent', () => {
  it('It should create the SimpleCardComponent', () => {
    const fixture = TestBed.createComponent(SimpleCardComponent);
    const simpledcard = fixture.componentInstance;
    expect(simpledcard).toBeTruthy();
  });
});