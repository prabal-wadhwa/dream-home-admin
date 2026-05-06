import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReportsMonthlySummaryTable } from './reports-monthly-summary-table';

describe('ReportsMonthlySummaryTable', () => {
  let component: ReportsMonthlySummaryTable;
  let fixture: ComponentFixture<ReportsMonthlySummaryTable>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ReportsMonthlySummaryTable],
    }).compileComponents();

    fixture = TestBed.createComponent(ReportsMonthlySummaryTable);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
