import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BookingReports } from './booking-reports';

describe('BookingReports', () => {
  let component: BookingReports;
  let fixture: ComponentFixture<BookingReports>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BookingReports],
    }).compileComponents();

    fixture = TestBed.createComponent(BookingReports);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
