import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllBookingsTable } from './all-bookings-table';

describe('AllBookingsTable', () => {
  let component: AllBookingsTable;
  let fixture: ComponentFixture<AllBookingsTable>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AllBookingsTable],
    }).compileComponents();

    fixture = TestBed.createComponent(AllBookingsTable);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
