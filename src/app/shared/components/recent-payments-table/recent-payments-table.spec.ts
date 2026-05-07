import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecentPaymentsTable } from './recent-payments-table';

describe('RecentPaymentsTable', () => {
  let component: RecentPaymentsTable;
  let fixture: ComponentFixture<RecentPaymentsTable>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RecentPaymentsTable],
    }).compileComponents();

    fixture = TestBed.createComponent(RecentPaymentsTable);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
