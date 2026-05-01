import { ComponentFixture, TestBed } from '@angular/core/testing';

import {  BookingTable } from './bookings-table';

describe('BookingsTable', () => {
  let component: BookingTable;
  let fixture: ComponentFixture<BookingTable>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BookingTable],
    }).compileComponents();

    fixture = TestBed.createComponent(BookingTable);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
