import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecentBookingTable } from './recent-booking-table';

describe('RecentBookingTable', () => {
  let component: RecentBookingTable;
  let fixture: ComponentFixture<RecentBookingTable>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RecentBookingTable],
    }).compileComponents();

    fixture = TestBed.createComponent(RecentBookingTable);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
